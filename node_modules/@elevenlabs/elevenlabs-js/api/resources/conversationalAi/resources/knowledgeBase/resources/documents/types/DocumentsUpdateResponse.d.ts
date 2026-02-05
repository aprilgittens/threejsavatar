import type * as ElevenLabs from "../../../../../../../index";
export type DocumentsUpdateResponse = ElevenLabs.conversationalAi.knowledgeBase.DocumentsUpdateResponse.Url | ElevenLabs.conversationalAi.knowledgeBase.DocumentsUpdateResponse.File_ | ElevenLabs.conversationalAi.knowledgeBase.DocumentsUpdateResponse.Text | ElevenLabs.conversationalAi.knowledgeBase.DocumentsUpdateResponse.Folder;
export declare namespace DocumentsUpdateResponse {
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
