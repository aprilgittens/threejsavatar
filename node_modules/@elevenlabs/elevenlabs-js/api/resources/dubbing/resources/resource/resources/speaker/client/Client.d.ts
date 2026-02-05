import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
import { SegmentClient } from "../resources/segment/client/Client";
export declare namespace SpeakerClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SpeakerClient {
    protected readonly _options: NormalizedClientOptions<SpeakerClient.Options>;
    protected _segment: SegmentClient | undefined;
    constructor(options?: SpeakerClient.Options);
    get segment(): SegmentClient;
    /**
     * Amend the metadata associated with a speaker, such as their voice. Both voice cloning and using voices from the ElevenLabs library are supported.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {string} speaker_id - ID of the speaker.
     * @param {ElevenLabs.dubbing.resource.BodyUpdateMetadataForASpeakerV1DubbingResourceDubbingIdSpeakerSpeakerIdPatch} request
     * @param {SpeakerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.speaker.update("dubbing_id", "speaker_id")
     */
    update(dubbing_id: string, speaker_id: string, request?: ElevenLabs.dubbing.resource.BodyUpdateMetadataForASpeakerV1DubbingResourceDubbingIdSpeakerSpeakerIdPatch, requestOptions?: SpeakerClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SpeakerUpdatedResponse>;
    private __update;
    /**
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {ElevenLabs.dubbing.resource.BodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost} request
     * @param {SpeakerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.speaker.create("dubbing_id")
     */
    create(dubbing_id: string, request?: ElevenLabs.dubbing.resource.BodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost, requestOptions?: SpeakerClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SpeakerCreatedResponse>;
    private __create;
    /**
     * Fetch the top 10 similar voices to a speaker, including the voice IDs, names, descriptions, and, where possible, a sample audio recording.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {string} speaker_id - ID of the speaker.
     * @param {SpeakerClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.speaker.findSimilarVoices("dubbing_id", "speaker_id")
     */
    findSimilarVoices(dubbing_id: string, speaker_id: string, requestOptions?: SpeakerClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SimilarVoicesForSpeakerResponse>;
    private __findSimilarVoices;
}
