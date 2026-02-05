import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace SipTrunkClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SipTrunkClient {
    protected readonly _options: NormalizedClientOptions<SipTrunkClient.Options>;
    constructor(options?: SipTrunkClient.Options);
    /**
     * Handle an outbound call via SIP trunk
     *
     * @param {ElevenLabs.conversationalAi.BodyHandleAnOutboundCallViaSipTrunkV1ConvaiSipTrunkOutboundCallPost} request
     * @param {SipTrunkClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.sipTrunk.outboundCall({
     *         agentId: "agent_id",
     *         agentPhoneNumberId: "agent_phone_number_id",
     *         toNumber: "to_number"
     *     })
     */
    outboundCall(request: ElevenLabs.conversationalAi.BodyHandleAnOutboundCallViaSipTrunkV1ConvaiSipTrunkOutboundCallPost, requestOptions?: SipTrunkClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SipTrunkOutboundCallResponse>;
    private __outboundCall;
}
