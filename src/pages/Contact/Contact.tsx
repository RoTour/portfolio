import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdSend } from 'react-icons/all';
import Title from '../../common/Title/Title';
import css from './Contact.module.css';
import * as nodemailer from 'nodemailer'

type ContactProps = {
  id: string
}

type Inputs = {
  email: string,
  company: string,
  message: string,
}

const Contact: FC<ContactProps> = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const transporter = nodemailer.createTransport(
      {
        service: process.env.CONTACT_EMAIL_SERVICE ?? 'notfound',
        auth: {
          user: process.env.CONTACT_SENDER_EMAIL,
          pass: process.env.CONTACT_SENDER_PASSWORD,
        },
        from: data.email,
        to: process.env.CONTACT_EMAIL ?? 'notfound',
        subject: `Contact From portfolio Website ${data.company ? `(${data.company})` : ''}`
      }
    )
    console.log(transporter);
  }

  return <div className={css.formContainer} id={props.id}>
    <div className={css.small}>
      <Title>Contact</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formRow}>
          <label className={css.formLabel}>
            ✉️ Email
            <input defaultValue={''} type={'email'} className={css.formInput}
                   placeholder={'ex. : john.doe@gmail.com'}
                   {...register('email', { required: true })} />
            {errors.email && <span>This field is required</span>}
          </label>
          <label className={css.formLabel}>
            🏢 Company (Optional)
            <input defaultValue={''} type={'text'} className={css.formInput}
                   placeholder={'ex. : Segfault Corp.'}
                   {...register('company')} />
          </label>
        </div>
        <label className={css.formLabel}>
          📜 Message
          <textarea defaultValue={''} className={css.formInput} rows={4}
                    placeholder={'Your message ...'}
                    {...register('message', { required: true, minLength: 5, maxLength: 5000 })}/>
          {errors.message && <span>This field is required</span>}
        </label>
        <button type={'submit'} className={css.submitBtn}>Send Message <MdSend size={'1.1em'}/> </button>
      </form>
    </div>
  </div>;
};

export default Contact;
