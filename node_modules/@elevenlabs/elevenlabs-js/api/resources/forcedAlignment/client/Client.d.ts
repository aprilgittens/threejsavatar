import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../BaseClient";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
export declare namespace ForcedAlignmentClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ForcedAlignmentClient {
    protected readonly _options: NormalizedClientOptions<ForcedAlignmentClient.Options>;
    constructor(options?: ForcedAlignmentClient.Options);
    /**
     * Force align an audio file to text. Use this endpoint to get the timing information for each character and word in an audio file based on a provided text transcript.
     *
     * @param {ElevenLabs.BodyCreateForcedAlignmentV1ForcedAlignmentPost} request
     * @param {ForcedAlignmentClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.forcedAlignment.create({
     *         file: fs.createReadStream("/path/to/your/file"),
     *         text: "text"
     *     })
     */
    create(request: ElevenLabs.BodyCreateForcedAlignmentV1ForcedAlignmentPost, requestOptions?: ForcedAlignmentClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ForcedAlignmentResponseModel>;
    private __create;
}
