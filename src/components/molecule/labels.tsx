export function Labels() {
  return (
    <div className="bg-primary grid grid-cols-12 gap-1 text-text-secondary p-5">
      <div className="col-span-4">
        <h3 className="">User</h3>
      </div>
      <div className="col-span-2">
        <h3>Teams</h3>
      </div>
      <div className="col-span-3">
        <h3>Access</h3>
      </div>
      <div className="col-span-2">
        <h3>Last login</h3>
      </div>
    </div>
  );
}
