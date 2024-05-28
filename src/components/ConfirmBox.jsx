function ConfirmBox({ onClose, onConfirm }) {
  return (
    <>
      <div className="mt-8 flex gap-4 justify-center items-center text-xl font-bold text-zinc-700 text-center">
        Nhóm máu mặc định là A+, bạn chắc chứ
      </div>
      <div className="mt-8 flex gap-4 justify-center items-center text-md font-bold">
        <button
          className="text-md font-bold bg-red-500 text-white cursor-pointer  px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300"
          onClick={onConfirm}
        >
          Xác nhận
        </button>
      </div>
    </>
  );
}

export default ConfirmBox;
