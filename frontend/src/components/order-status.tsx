import clsx from 'clsx'

type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivering: 'Entregue',
  delivered: 'Em entrega',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={clsx('h-2 w-2 rounded-full', {
          'bg-slate-400': status === 'pending',
          'bg-rose-500': status === 'canceled',
          'bg-emerald-500': status === 'delivered',
          'bg-amber-500': ['processing', 'delivering'].includes(status),
        })}
      />

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
