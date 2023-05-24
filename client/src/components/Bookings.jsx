export default function Bookings(props) {
  return (
    <>
      <div className="max-w-[370px] p-6 shadow-lg rounded-lg border border-black/20">
        <h2 className="text-medium">
          <span className="text-xl">
            &#x20B9;
            {props.price}
          </span>
          night
        </h2>

        <div>
          <div className="border border-black/60 rounded-xl mt-2 mb-6">
            <div className="flex items-center justify-between p-4">
              <div>
                <label htmlFor="fromDate" className="text-xs font-medium">
                  check-in
                </label>
                <input
                  id="fromDate"
                  type="date"
                  className="block w-full text-xs"
                  value={props.fromDate}
                  onChange={(event) => props.setFromDate(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="toDate" className="text-xs font-medium">
                  check-out
                </label>
                <input
                  id="toDate"
                  type="date"
                  className="block w-full text-xs"
                  value={props.toDate}
                  onChange={(event) => props.setToDate(event.target.value)}
                />
              </div>
            </div>

            <div className="text-sm font-medium border-t border-black/60 text-center py-4">
              guest: max {props.maxcount}
            </div>
          </div>

          <button
            onClick={props.storeToLocalStorage}
            className="w-full py-3 text-sm font-medium bg-accent text-white rounded-lg"
          >
            Reserve
          </button>
        </div>

        <div className="flex mt-6 pt-4 justify-between border-t border-black/60">
          <span>Total amount</span>
          <span>&#x20b9;{props.price}</span>
        </div>
      </div>
    </>
  );
}
