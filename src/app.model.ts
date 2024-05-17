export interface WordDto {
  word: string;
  meaning: string;
  [key: string]: string;
}

export interface VoteDto {
  word_id: number;
  ip?: string;
  vote: 'like' | 'dislike';
}

export interface KakaoToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

export interface JwtToken {
  expires_in?: number;
  aud?: string;
  sub?: string;
  id?: string;
}

export interface Member extends KakaoToken {
  nickname?: string;
}
