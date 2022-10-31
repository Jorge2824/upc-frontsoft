import HttpRequest from "@/http-common";

class MarksServices {
    async searchCourses() {
        try {
            const response = await HttpRequest.get("/courses")
            if (response.status === 200) {
                return response
            }
        } catch (e) {
            throw e
        }
    }
}

export default new MarksServices();