import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        )

        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "test comment"
        })).resolves.not.toThrow()
    })
})