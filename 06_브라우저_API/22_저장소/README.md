# 22. 저장소 (localStorage / sessionStorage / 쿠키)

> 단계: 심화 | 선수: 21_Fetch와_JSON

## 학습 목표
- 브라우저 저장소 3가지의 차이를 안다.
- localStorage / sessionStorage API를 사용할 수 있다.
- 쿠키의 개념과 용도를 이해한다.
- 상황에 맞는 저장소를 선택할 수 있다.

> 모든 예제는 **브라우저** 환경에서 동작합니다. Node에서는 실행되지 않습니다.

## 1. localStorage
도메인별로 영구 저장됩니다. 명시적으로 지우기 전까지 남습니다.

```js
localStorage.setItem('username', '홍길동');
const name = localStorage.getItem('username');
localStorage.removeItem('username');
localStorage.clear();
```

값은 **문자열만** 저장됩니다. 객체는 `JSON.stringify`로 변환해 저장합니다.

## 2. sessionStorage
탭이 닫히면 사라집니다. API는 localStorage와 동일합니다.

```js
sessionStorage.setItem('cart', JSON.stringify([1, 2, 3]));
```

## 3. 쿠키 (개요)
- 서버와 자동으로 주고받는 작은 텍스트.
- 인증 토큰, 세션 식별자 등에 사용.
- 용량 4KB로 작음. 모든 요청에 자동 첨부 → 트래픽 증가 주의.
- 브라우저에서는 `document.cookie`로 접근하지만 권장되지 않음. 서버에서 `Set-Cookie` 헤더로 설정하는 게 일반적.

## 4. 비교

| 항목 | localStorage | sessionStorage | 쿠키 |
|------|--------------|----------------|------|
| 수명 | 영구 | 탭 닫을 때까지 | 만료일 설정 |
| 용량 | 약 5~10MB | 약 5~10MB | 약 4KB |
| 서버 전송 | X | X | 자동 |
| 용도 | 환경설정, 캐시 | 임시 상태 | 인증 |

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| 01_localstorage.js | localStorage 기본 |
| 02_sessionstorage.js | sessionStorage 기본 |
| 03_cookie_overview.js | 쿠키 읽기 예시 |
| 04_comparison.js | 세 저장소 비교 |

각 파일은 브라우저 콘솔이나 빈 HTML의 `<script>`에 붙여 실행하세요.

## ⚠️ 자주 하는 실수
1. 객체를 그대로 저장 → `[object Object]` 문자열이 됨.
2. `getItem`이 `null`을 반환할 수 있는데 처리하지 않음.
3. 민감 정보(비밀번호 등)를 localStorage에 저장.
4. sessionStorage가 새 탭에서도 공유된다고 오해.
5. 쿠키를 `document.cookie`로만 직접 다루며 보안 옵션 무시.

## ❓ 자주 묻는 질문 (FAQ)
**Q1. 시크릿 창에서도 저장되나요?** A. 창을 닫으면 모두 사라집니다.
**Q2. 용량 초과하면?** A. `QuotaExceededError`가 발생합니다.
**Q3. 도메인이 다르면 공유되나요?** A. 안 됩니다. 출처(origin)별로 격리됩니다.

## 📝 과제 (homework/)
간단한 메모장과 다크모드 토글을 저장소에 저장하세요.

## 다음 단원
[23_모듈_ESM](../23_모듈_ESM/)
