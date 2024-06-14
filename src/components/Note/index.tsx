const Note = ({ data }: { data: Record<string, any> }) => {
  return (
    <div className="w-full shadow-md rounded-md p-3 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-accent">{data.name}</h2>
        <span className={`${data.presence ? "bg-green-400" : "bg-red-400"} h-fit rounded-md text-xs text-primary px-3 py-1`}>{data.presence ? "Hadir" : "Tidak Hadir"}</span>
      </div>
      <p className="text-accent text-sm">{data.messages}</p>
    </div>
  );
};

export default Note;
