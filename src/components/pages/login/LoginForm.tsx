import Image from 'next/image';
import useLoginForm from './useLoginForm';
import { Button } from '@/components/common/Button';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useLoginForm();

  return (
    <section className='min-h-screen px-5 grid place-content-center'>
      <Image
        src='/logo.png'
        alt='Logo DevTech'
        width={150}
        height={150}
        className='mx-auto'
      />

      <h1 className='text-center text-4xl'>
        Bienvenido a <span className='text-turquoise-blue-400'>DevTech</span>
      </h1>

      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className='flex flex-col items-center justify-center md:w-96'
      >
        <input
          type='email'
          placeholder='Email'
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          type='password'
          placeholder='Password'
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <Button type='submit' className='w-full py-4'>
          Ingresar
        </Button>
      </form>
    </section>
  );
};

export default LoginForm;
