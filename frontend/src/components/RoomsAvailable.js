import Room from "./Room"

function RoomsAvailable() {
    return (
        <div className="h-full justify-items-center grid grid-col-1">
            <div className="w-1/3  grid grid-col-1 gap-6 py-12">
                <Room />
                <Room />
                <Room />
            </div>
        </div>
    )
}

export default RoomsAvailable