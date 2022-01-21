
## 프로젝트
# 소복소복<img src="https://user-images.githubusercontent.com/68781598/149136866-31b58e24-59f2-437b-8338-87111dd8a479.png" align=left width=100>

> 소중한 사람과 함께하는 복약 체크 서비스 💊

<br />

## 💭 프로젝트 설명

> 여러분은 소중한 사람의 건강을 지키기 위해 어떤 노력을 하고 계신가요?  
> 
> 걱정되는 마음은 있지만, 막상 내가 매일 무언가 행동하는 건 쉽지 않죠.  
> 일상이 바쁜 당신을 위해서 소복소복이 여러분의 일을 줄여드려요.  
> 소복소복에서는 소중한 사람이 약을 제 때 먹었는지 직접 물어보지 않고도 체크할 수 있거든요.  
> 
> **나의 복약 체크는 물론, 소중한 사람의 복약까지 확인할 수 있는 ‘소복소복’**
> **우리의 건강을 챙기는 매일의 실천입니다** 🙂

<br />

## 💭 프로젝트 핵심 기능

- 메인 나의 복약을 체크하고, 상대방이 보내준 응원스티커를 확인할 수 있습니다.
- 공유 소중한 사람의 복약 캘린더를 확인하고, 응원을 보낼 수 있습니다.
- 알림 캘린더 공유 요청과 전송받은 복약 정보를 확인할 수 있습니다.
- 약 추가 내 복약 정보를 추가하고, 소중한 사람에게 복약 일정을 전송할 수 있습니다.

<img src="https://user-images.githubusercontent.com/51286325/150369337-b16e0891-b7c0-4443-a459-77821cb5d05d.jpg">

## 🙋🏻‍♂️ Team Member 사복이들

### [강한희](https://github.com/kanghanhee)
```
로그인, 회원가입

공유관련

알림(캘린더 공유 기능)
```

### [이승헌](https://github.com/lsh328328)
```
메인

약 추가

알림(약 추가 기능)
```
### 👉 [API 명세서 링크](https://www.notion.so/baejiann120/API-6280231150ca40eeb2de46beb5292931)

## 📂 Folder Structure

```markdown
📦functions
┣ 📂api
┃ ┣ 📂routes
┣ 📂config
┣ 📂constants
┣ 📂db
┣ 📂lib
┣ 📂middlewares
┣ 📜.eslintrc.js
┣ 📜.prettierrc.js
┣ 📜index.js
```

## 🛠 Dependencies module
```json
"dependencies": {
    "axios": "^0.25.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dayjs": "^1.10.7",
    "dotenv": "^10.0.0",
    "eslint-config-prettier": "^8.3.0",
    "express": "^4.17.2",
    "firebase": "^9.6.2",
    "firebase-admin": "^9.8.0",
    "firebase-functions": "^3.14.1",
    "helmet": "^5.0.1",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.21",
    "pg": "^8.7.1"
  },
```

### 👉 [SobokSobok ERD]
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/374f114b-4dcd-4f0a-83d2-cc3f4bca9061/sobok-erd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220112T113821Z&X-Amz-Expires=86400&X-Amz-Signature=edd0cd1abb22e6c8a60abac10044f0f3698e11ce7d562e5b9d256c9bffb022da&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22sobok-erd.png%22&x-id=GetObject)


## 💻 Code Convention
<details>
<summary>변수명</summary>   
<div markdown="1">       
      
 
 1. Camel Case 사용 
   - lower Camel Case
 2. 함수의 경우 동사+명사 사용 
   - ex) getCalender()
 3. flag로 사용 되는 변수는 조동사 + flag 종류로 구성 
   - ex) isNum
 4. 약어는 되도록 사용하지 않는다.
 
</div>
</details>

<details>
<summary>주석</summary>
<div markdown="1">       

 1. 한줄 주석은 // 를 사용한다.
  ```javascript
    // 한줄 주석일 때
    /**
    * 여러줄
    * 주석일 때
    */
  ```
 2. 함수에 대한 주석
  ```javascript
    /**
    * api get /travel/:groupNumber
    * 그룹 여행 정보 가져오기
  ```
 3. Bracket 사용 시 내부에 주석을 작성한다.
  ```javascript
    if (a == 5) {
	  // 주석
    }
  ```
 
</div>
</details>
      
## 💬 Commit Message Rules
| 태그 이름  |                             설명                             |
| :--------: | :----------------------------------------------------------: |
|   [feat]   |                       새로운 기능 구현                       |
|  [update]  |                   feat 이외의 부수적인 코드 추가             |
|   [fix]    |                         버그, 오류 해결                      |
|  [hotfix]  |             issue나 QA에서 급한 버그 수정에 사용             |
|   [style]  |       코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는 경우    |
| [refactor] |                     프로덕션 코드 리팩토링                   |
|   [docs]   |             문서를 수정한 경우, 파일 삭제, 파일명 수정 등     |
|  [chore]   |                          내부 파일 수정                      |

**Example**

```
[feat] : "로그인 api 구현"
```

### 🔅 Branches

- `develop` : develop 브랜치
  - `develop`에 직접적인 commit, push는 가급적 금지합니다
  - 작업 전, 반드시 `develop` 브랜치를 pull 받고 시작합니다
    ```
    git pull origin develop
    ```
  - 계획한 모든 기능 구현 & 테스트 통과 시 `main` 브랜치로 Pull Request를 보내서 Merge 합니다
 
- `feature/#issue number` : 해당 기능 개발 브랜치
  - 작업 완료 시 `develop` 브랜치로 Pull Request를 보냅니다
  - 새로운 기능 개발 시 `feature/#issue number` 브랜치를 파서 관리합니다
    ```
    git branch feature/#issue number
    ```
- 커밋은 되도록 파일, 폴더단위로 직접 입력하여 진행합니다
- merge는 github에서 진행합니다
- 다 쓴 브랜치는 삭제합니다
