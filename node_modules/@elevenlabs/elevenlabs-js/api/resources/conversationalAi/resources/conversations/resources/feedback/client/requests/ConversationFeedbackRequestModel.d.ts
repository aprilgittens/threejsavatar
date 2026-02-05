import type * as ElevenLabs from "../../../../../../../../index";
/**
 * @example
 *     {
 *         feedback: "like"
 *     }
 */
export interface ConversationFeedbackRequestModel {
    /** Either 'like' or 'dislike' to indicate the feedback for the conversation. */
    feedback?: ElevenLabs.UserFeedbackScore;
}
