export default function PopupNotification({ message }) {
  return (
    <>
      <div className="max-w-xs fixed top-16 right-8 py-3 px-4 shadow-lg border border-black/10 rounded-lg">
        {message}
      </div>
    </>
  );
}
