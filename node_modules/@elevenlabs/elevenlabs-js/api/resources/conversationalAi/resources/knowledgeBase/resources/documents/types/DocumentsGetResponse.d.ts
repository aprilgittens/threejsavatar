import type * as ElevenLabs from "../../../../../../../index";
export type DocumentsGetResponse = ElevenLabs.conversationalAi.knowledgeBase.DocumentsGetResponse.Url | ElevenLabs.conversationalAi.knowledgeBase.DocumentsGetResponse.File_ | ElevenLabs.conversationalAi.knowledgeBase.DocumentsGetResponse.Text | ElevenLabs.conversationalAi.knowledgeBase.DocumentsGetResponse.Folder;
export declare namespace DocumentsGetResponse {
    interface Url extends ElevenLabs.GetKnowledgeBaseUrlResponseModel {
        type: "url";
    }
    interface File_ extends ElevenLabs.GetKnowledgeBaseFileResponseModel {
        type: "file";
    }
    interface Text extends ElevenLabs.GetKnowledgeBaseTextResponseModel {
        type: "text";
    }
    interface Folder extends ElevenLabs.GetKnowledgeBaseFolderResponseModel {
        type: "folder";
    }
}
