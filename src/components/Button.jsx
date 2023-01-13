export default function Button({ children }) {
  return (
    <button className="mt-5 border border-[#271A45] rounded-full px-4 py-2 max-w-fit">
      {children}
    </button>
  );
}
