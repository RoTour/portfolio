import axios from 'axios';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdSend } from 'react-icons/all';
import Title from '../../common/Title/Title';
import css from './Contact.module.css';

type ContactProps = {
  id: string
}

type Inputs = {
  email: string,
  company: string,
  message: string,
}

const Contact: FC<ContactProps> = (props) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios({
      method: 'POST',
      url: '',
      data: {
        'from': data.email,
        'html': `<p>${data.message}</p>`,
        'subject': `Message from portfolio website ${data.company ? `(${data.company})` : ''})`,
      },
    }).then(() => {
      setValue('email', '');
      setValue('company', '');
      setValue('message', '');
    });
  };

  return <div className={css.formContainer} id={props.id}>
    <div className={css.small}>
      <Title>Contact</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formRow}>
          <label className={[css.formLabel, `${errors.email ? css.error : ''}`].join(' ')}>
            ✉️ Email {errors.email && ' - This field is required'}
            <input defaultValue={''} type={'email'} className={css.formInput}
                   placeholder={'ex. : john.doe@gmail.com'}
                   {...register('email', { required: true })} />
          </label>
          <label className={css.formLabel}>
            🏢 Company (Optional)
            <input defaultValue={''} type={'text'} className={css.formInput}
                   placeholder={'ex. : Segfault Corp.'}
                   {...register('company')} />
          </label>
        </div>
        <label className={[css.formLabel, `${errors.message ? css.error : ''}`].join(' ')}>
          📜 Message {errors.message && ' - This field is required '}
          <textarea defaultValue={''} className={css.formInput} rows={4}
                    placeholder={'Your message ...'}
                    {...register('message', { required: true, minLength: 5, maxLength: 5000 })}/>
        </label>
        <button type={'submit'} className={css.submitBtn}>Send <MdSend size={'1.1em'}/></button>
      </form>
    </div>
  </div>;
};

export default Contact;
