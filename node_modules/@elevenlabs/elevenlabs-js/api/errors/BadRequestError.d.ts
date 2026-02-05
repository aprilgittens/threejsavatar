import type * as core from "../../core";
import * as errors from "../../errors/index";
import type * as ElevenLabs from "../index";
export declare class BadRequestError extends errors.ElevenLabsError {
    constructor(body: ElevenLabs.BadRequestErrorBody, rawResponse?: core.RawResponse);
}
