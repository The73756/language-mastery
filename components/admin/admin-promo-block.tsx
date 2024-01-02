import { AdminBlockControl } from '@/components/admin/admin-block-control'
import { AdminBlockWrapper } from '@/components/admin/admin-block-wrapper'
import { Input } from '@/components/shared/input'

export const AdminPromoBlock = () => {
  return (
    <AdminBlockWrapper title="Промо блок">
      <form className="flex flex-col gap-3">
        <div className="flex gap-5 *:w-full">
          <Input placeholder="Ссылка на изображение" />
          <Input placeholder="Заголовок" />
          <Input placeholder="Подзаголовок" />
          <Input placeholder="Стоимость" />
        </div>

        <AdminBlockControl className="ml-auto" />
      </form>
    </AdminBlockWrapper>
  )
}
