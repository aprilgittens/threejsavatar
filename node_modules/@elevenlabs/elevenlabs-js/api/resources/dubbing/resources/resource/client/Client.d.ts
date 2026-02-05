import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
import { LanguageClient } from "../resources/language/client/Client";
import { SegmentClient } from "../resources/segment/client/Client";
import { SpeakerClient } from "../resources/speaker/client/Client";
export declare namespace ResourceClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ResourceClient {
    protected readonly _options: NormalizedClientOptions<ResourceClient.Options>;
    protected _language: LanguageClient | undefined;
    protected _segment: SegmentClient | undefined;
    protected _speaker: SpeakerClient | undefined;
    constructor(options?: ResourceClient.Options);
    get language(): LanguageClient;
    get segment(): SegmentClient;
    get speaker(): SpeakerClient;
    /**
     * Given a dubbing ID generated from the '/v1/dubbing' endpoint with studio enabled, returns the dubbing resource.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {ResourceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.get("dubbing_id")
     */
    get(dubbing_id: string, requestOptions?: ResourceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DubbingResource>;
    private __get;
    /**
     * Change the attribution of one or more segments to a different speaker.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {ElevenLabs.dubbing.BodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost} request
     * @param {ResourceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.migrateSegments("dubbing_id", {
     *         segmentIds: ["segment_ids"],
     *         speakerId: "speaker_id"
     *     })
     */
    migrateSegments(dubbing_id: string, request: ElevenLabs.dubbing.BodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost, requestOptions?: ResourceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SegmentMigrationResponse>;
    private __migrateSegments;
    /**
     * Regenerate the transcriptions for the specified segments. Does not automatically regenerate translations or dubs.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {ElevenLabs.dubbing.BodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost} request
     * @param {ResourceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.transcribe("dubbing_id", {
     *         segments: ["segments"]
     *     })
     */
    transcribe(dubbing_id: string, request: ElevenLabs.dubbing.BodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost, requestOptions?: ResourceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SegmentTranscriptionResponse>;
    private __transcribe;
    /**
     * Regenerate the translations for either the entire resource or the specified segments/languages. Will automatically transcribe missing transcriptions. Will not automatically regenerate the dubs.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {ElevenLabs.dubbing.BodyTranslatesAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdTranslatePost} request
     * @param {ResourceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.translate("dubbing_id", {
     *         segments: ["segments"]
     *     })
     */
    translate(dubbing_id: string, request: ElevenLabs.dubbing.BodyTranslatesAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdTranslatePost, requestOptions?: ResourceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SegmentTranslationResponse>;
    private __translate;
    /**
     * Regenerate the dubs for either the entire resource or the specified segments/languages. Will automatically transcribe and translate any missing transcriptions and translations.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {ElevenLabs.dubbing.BodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost} request
     * @param {ResourceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.dub("dubbing_id", {
     *         segments: ["segments"]
     *     })
     */
    dub(dubbing_id: string, request: ElevenLabs.dubbing.BodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost, requestOptions?: ResourceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.SegmentDubResponse>;
    private __dub;
    /**
     * Regenerate the output media for a language using the latest Studio state. Please ensure all segments have been dubbed before rendering, otherwise they will be omitted. Renders are generated asynchronously, and to check the status of all renders please use the 'Get Dubbing Resource' endpoint.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {string} language - The target language code to render, eg. 'es'. To render the source track use 'original'.
     * @param {ElevenLabs.dubbing.BodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost} request
     * @param {ResourceClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.render("dubbing_id", "language", {
     *         renderType: "mp4"
     *     })
     */
    render(dubbing_id: string, language: string, request: ElevenLabs.dubbing.BodyRenderAudioOrVideoForTheGivenLanguageV1DubbingResourceDubbingIdRenderLanguagePost, requestOptions?: ResourceClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DubbingRenderResponseModel>;
    private __render;
}
