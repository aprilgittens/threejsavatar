import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace FeedbackClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class FeedbackClient {
    protected readonly _options: NormalizedClientOptions<FeedbackClient.Options>;
    constructor(options?: FeedbackClient.Options);
    /**
     * Send the feedback for the given conversation
     *
     * @param {string} conversation_id - The id of the conversation you're taking the action on.
     * @param {ElevenLabs.conversationalAi.conversations.ConversationFeedbackRequestModel} request
     * @param {FeedbackClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.conversations.feedback.create("21m00Tcm4TlvDq8ikWAM", {
     *         feedback: "like"
     *     })
     */
    create(conversation_id: string, request?: ElevenLabs.conversationalAi.conversations.ConversationFeedbackRequestModel, requestOptions?: FeedbackClient.RequestOptions): core.HttpResponsePromise<unknown>;
    private __create;
}
