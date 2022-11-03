import HttpRequest from "@/http-common";

class MarksServices {
    async searchCourses(data) {
        try {
            const response = await HttpRequest.post("/courses", data)
            if (response.status === 200) {
                return response
            }
        } catch (e) {
            throw e
        }
    }
}

export default new MarksServices();