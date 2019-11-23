# GatsbyJs study #3

* 일시 : 2019-11-23
* 결과물 : https://upbeat-montalcini-a9e647.netlify.com/

## contentful
* https://www.contentful.com/  ( sugar.plus.sugar.plus.sugar@gmail.com  / three-sugar  ) 
* 설치 https://www.gatsbyjs.org/docs/sourcing-from-contentful/
* api key
* content model 생성, content 추가

## 첫페이지 - 제품 목록 
* contentful 데이터 조회 
* http://localhost:8000/___graphql
* 등록된 상품이 하나도 없는 경우의 오류 
* Rich text 타입의 경우 별도 처리 
  * 필요에 따라 .cache 삭제 

## 제품 상세 
* gatsby-node.js 에서 페이지 생성 (빌드타임때 생성됨) 
* 카트 추가

## 카트
* 정적 쿼리 VS 페이지 쿼리 https://www.gatsbyjs.org/docs/static-query/
* https://www.netlify.com/products/forms/
  * 적용시 문제점들 
  * 이메일 알림 

## contentful에 새 상품을 추가할 경우 
* gatsby-node.js 의 페이지는 빌드타임때 생성됨. 서버 재시작 필요
* Hook
  * Netlify - settings - Build & deploy - Build hooks
  * Content full - settings - webhooks 

## 그 외 
* https://www.gatsbyjs.org/docs/building-an-ecommerce-site-with-shopify/


  
