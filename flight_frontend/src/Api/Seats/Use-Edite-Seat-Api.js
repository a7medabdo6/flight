import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditeSeatData = async (FormData) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.patch(`Seat/${FormData.id}`,FormData.data);
    return res.data;
}

export {UseEditeSeatData };
