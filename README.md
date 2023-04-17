# nsc-web-template

자주 쓰는 웹 기술을 사용하여 템플릿을 만들었습니다.

### Mono Repo

- 레포지토리 구조는 아래와 같습니다

```plaintext
root
├─ apps
│   ├─ next-app
│   │
│   ├─ e2e-test
│
├─ packages
    ├─ eslint-config-malloc72p
    │
    ├─ tsconfig-malloc72p
```

### NextJS Installation

```shell
yarn create next-app --typescript
```

### Rule

**재사용 구성은 최대한 재사용**

- [참조](https://typescript-eslint.io/docs/linting/typed-linting/monorepos/)
- 기본적으로 루트의 tsconfig를 extends해서 사용한다

```json
{
  "extends": "../tsconfig.json"
}
```

### 할일

**Docker Compose**

- [x] Postgresql
- [x] Keycloak
- [x] Redis

**Playwright**

- [x] 설치
- [ ] Fixture
- [ ] Global Setup

**Next APP**

- [x] 앱 설치
- [x] 맨타인
- [x] prisma
- [ ] redis client
- [ ] keycloak admin client
- [ ] aws sdk SMTP SES

**Github Actions**

- [ ] Issue Template
- [ ] Pull Request Template
- [ ] CI on every branch
  - [ ] Test next app build
  - [ ] Next App unit test
- [ ] deploy production
  - [ ] Test e2e and send email to developer

**Infrastructure**

- [ ] AWS CDK Project 생성
- [ ] 네트워크 스택(VPC, Subnet, ALB)
- [ ] 데이터베이스 스택(RDS)
- [ ] 앱서버 스택(ECS)
- [ ] 레디스 스택(Elasticache)
- [ ] 혹은, ECS 배포 대신 서버리스 배포를 고려하도록 한다.(최대한 간단하고 쉽고 빠르게)
- [ ] 인증 관련 설정은 Keycloak대신 Cognito를 사용하는것을 최대한 고려해본다. (최대한 쉽고 간단하게)

**ETC**

- [x] ES Lint & Prettier
- [x] Git Hook(Commit : unit, Push : E2E)
- [x] turbo monorepo 구성
- [ ] 모노레포 사용법 리드미에 정리
- [x] Astro, AstroWind, MDX를 사용한 Docs 사이트 템플릿
