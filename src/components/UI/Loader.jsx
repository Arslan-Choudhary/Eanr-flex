import "../../App.css";

export function Loader() {
  return (
    <div className="h-[600px] w-full flex items-center justify-center">
    <div className="w-[50px] aspect-square p-2 rounded-full bg-[#25b09b] animate-spin 
[mask-composite:subtract] [mask:conic-gradient(#0000_10%,#000),linear-gradient(#000_0_0)_content-box]
[--webkit-mask-composite:source-out]">
    </div>
</div>
  );
}