import Link from 'next/link'
import { Button } from '@/components/shared/button'
import { FormWrapper } from '@/components/shared/form-wrapper'
import { Input } from '@/components/shared/input'
import { Routes } from '@/types/routes'

export const RegistrationForm = () => {
  return (
    <FormWrapper title="Регистрация">
      <div className="flex flex-col gap-5 mb-7">
        <Input preset="white" type="text" autoComplete="name" placeholder="Имя пользователя" />
        <Input preset="white" type="password" autoComplete="new-password" placeholder="Пароль" />
        <Input
          preset="white"
          type="password"
          autoComplete="new-password"
          placeholder="Повторите пароль"
        />
      </div>

      <div className="text-16-400 text-white flex justify-between items-center">
        <div>
          <p>Уже зарегистрированы?</p>
          <Link href={Routes.AUTH} className="underline hover:text-light-blue transition-colors">
            Войти
          </Link>
        </div>

        <Button text="Зарегистрироваться" preset="accent" />
      </div>
    </FormWrapper>
  )
}