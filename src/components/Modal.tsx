interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-slate-700 rounded-lg shadow-lg w-96 max-w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-orange-400">{title}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-xl leading-none"
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal