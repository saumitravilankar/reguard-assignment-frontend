const Navbar = () => {
  return (
    <div className="flex items-center justify-end gap-4 w-full h-[60px] px-4 bg-slate-50 border-b">
      <div>
        <h1>Welcome, Mr. Admin</h1>
      </div>
      <img
        src="/admin.png"
        width={40}
        height={40}
        className="rounded-full border bg-slate-300 p-1"
      />
    </div>
  );
};

export default Navbar;
