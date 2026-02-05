import type * as ElevenLabs from "../../../../../index";
export type KnowledgeBaseGetOrCreateRagIndexesResponseValue = ElevenLabs.conversationalAi.KnowledgeBaseGetOrCreateRagIndexesResponseValue.Success | ElevenLabs.conversationalAi.KnowledgeBaseGetOrCreateRagIndexesResponseValue.Failure;
export declare namespace KnowledgeBaseGetOrCreateRagIndexesResponseValue {
    interface Success extends ElevenLabs.RagIndexBatchSuccessfulResponseModel {
        status: "success";
    }
    interface Failure extends ElevenLabs.BatchFailureResponseModel {
        status: "failure";
    }
}
