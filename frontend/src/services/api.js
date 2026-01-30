
const api = {
    post: () =>
        Promise.resolve({
            data: {
                strengths: ["Strong academics"],
                gaps: ["IELTS pending"],
                advive: "Apply to target universities first"
            }
        }),

        get: () =>
            Promise.resolve({
                data: [
                    { task: "Prepare SOP" },
                    { task: "BOOK IELTS exam" }
                ]
            })
};
export default api;