import medical from "../../img/medical.jpg"
function BlogCard() {
    return (
        <div>
            <div style={{ height: "300px" }} className="relative mt-12 overflow-hidden">
                <img className="rounded-xl absolute w-full h-full object-fill" src={medical} alt="medical" />
            </div>
            <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-2">
                    <svg width="14" style={{ color: "#020105" }} height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.23771C2 2.62857 2.4938 2.13477 3.10294 2.13477H10.8971C11.5062 2.13477 12 2.62857 12 3.23771V11.4833C12 12.0924 11.5062 12.5862 10.8971 12.5862H3.10294C2.4938 12.5862 2 12.0924 2 11.4833V3.23771Z" stroke="#020105" stroke-width="1.10294" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 1.07422V3.37968" stroke="#020105" stroke-width="1.10294" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 1.07422V3.37968" stroke="#020105" stroke-width="1.10294" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 5.27051H12" stroke="#020105" stroke-width="1.10294" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h1 className="content__five__card__data">14.02.2022</h1>
                </div>
                <div className="flex items-center space-x-1">
                    <svg style={{ color: "#020105" }} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.71484 8.21139C1.71484 8.21139 4.00056 3.43359 8.00056 3.43359C12.0006 3.43359 14.2863 8.21139 14.2863 8.21139C14.2863 8.21139 12.0006 12.9892 8.00056 12.9892C4.00056 12.9892 1.71484 8.21139 1.71484 8.21139Z" stroke="#020105" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99944 10.0033C8.94622 10.0033 9.71373 9.20111 9.71373 8.2116C9.71373 7.22208 8.94622 6.41992 7.99944 6.41992C7.05267 6.41992 6.28516 7.22208 6.28516 8.2116C6.28516 9.20111 7.05267 10.0033 7.99944 10.0033Z" stroke="#020105" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h1 className="content__five__card__data">123 465</h1>
                </div>
            </div>
            <div className="content__Five__card__div __qator2">
                <a href="#" className="hover:underline">The Fifth Workshop of the Advisory Group on the Activities of the National Children's</a>
            </div>
        </div>
    );
}

export default BlogCard;