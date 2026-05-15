# 18. DOM 조작

> 단계: 중급 | 선수: 17_DOM_선택과_조회

## 학습 목표
- `createElement`, `appendChild`, `prepend`, `remove` 로 트리를 변경한다.
- `classList` 로 클래스를 추가/제거/토글한다.
- `style` 프로퍼티로 인라인 스타일을 변경한다.
- DocumentFragment 로 다수의 노드를 효율적으로 삽입한다.
- 텍스트와 속성을 안전하게 설정한다.

## 1. 요소 생성과 추가
```js
const li = document.createElement("li");
li.textContent = "새 아이템";
list.appendChild(li);
```

`append` 는 여러 노드와 문자열을 한 번에 받을 수 있습니다. `prepend` 는 앞에 붙입니다.

## 2. 제거
```js
target.remove();
parent.removeChild(target); // 구식
```

## 3. classList
```js
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open");
el.classList.contains("active");
```

`className = "..."` 는 기존 클래스를 모두 덮어쓰므로 주의합니다.

## 4. style
```js
el.style.color = "red";
el.style.backgroundColor = "yellow";
```

CSS 의 `background-color` 는 자바스크립트에서 카멜케이스 `backgroundColor` 가 됩니다.

## 5. DocumentFragment
많은 노드를 한꺼번에 삽입할 때 reflow 를 줄이기 위해 fragment 를 사용합니다.

```js
const frag = document.createDocumentFragment();
for (let i = 0; i < 100; i += 1) {
  const li = document.createElement("li");
  li.textContent = `item ${i}`;
  frag.appendChild(li);
}
list.appendChild(frag);
```

## 핵심 예제 (src/)
| 파일 | 다루는 내용 |
|------|------------|
| index.html | 예제 HTML |
| 01_create_element.js | createElement + appendChild |
| 02_append_remove.js | append/prepend/remove |
| 03_classlist.js | classList add/remove/toggle |
| 04_style.js | style 프로퍼티 설정 |

## ⚠️ 자주 하는 실수
1. `appendChild` 에 문자열을 넘김(노드만 가능, append 는 가능).
2. 반복문 안에서 매번 부모에 추가하여 성능 저하.
3. `className = "x"` 로 기존 클래스 삭제.
4. style 의 단위 누락(`px` 등).
5. 같은 노드를 두 곳에 appendChild → 이동만 됨(복제 아님).

## ❓ 자주 묻는 질문 (FAQ)
**Q1. appendChild 와 append 의 차이?** A. append 는 노드/문자열 여러 개를 받고 반환값이 없습니다. appendChild 는 노드 하나만, 추가된 노드를 반환.

**Q2. classList 가 더 좋은 이유?** A. 다른 클래스에 영향을 주지 않고 안전하게 조작할 수 있습니다.

**Q3. 인라인 style 과 CSS 클래스 중 무엇을 써야 하나요?** A. 가급적 클래스 토글, 동적 계산값(예: 좌표)만 인라인 style.

## 📝 과제 (homework/)
버튼을 누르면 목록에 새 항목을 추가하는 페이지를 만드세요.

## 다음 단원
[19_이벤트_처리](../19_이벤트_처리/) — 사용자 인터랙션 다루기
