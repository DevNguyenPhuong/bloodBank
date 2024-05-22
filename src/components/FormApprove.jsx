function FormApprove() {
  return (
    <form
      className=" font-bold rounded-lg  text-zinc-700 flex flex-col gap-6"
      id="requestForm"
      action=""
    >
      <div className="flex items-center h-14 ">
        <label className="w-48" for="bloodGroup">
          Nhóm máu
        </label>
        <select
          className="text-red-500 p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          id="bloodGroup"
          name="bloodGroup"
        >
          <option value="">Chọn nhóm máu</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      <div className="flex items-center h-14 ">
        <label className="w-48" for="ml">
          Ngày hiến
        </label>
        <input
          className="p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="date"
          id="ml"
          name="ml"
        />
      </div>
      <div className="flex items-center h-14 ">
        <label className="w-48" for="address">
          Đơn vị máu (ml)
        </label>
        <input
          className="p-2 w-72 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          type="text"
          id="address"
          name="address"
        />
      </div>

      <div className="btn-donor flex justify-end gap-6">
        <button className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 ">
          Gửi
        </button>
        <button className="text-l font-bold bg-red-500 text-white cursor-pointer mt-5 px-6 py-2 rounded-md border-none hover:bg-red-600 transition-all duration-300 ">
          Huỷ
        </button>
      </div>
    </form>
  );
}

export default FormApprove;
