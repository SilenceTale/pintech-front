/* 서버 사이드로 구성. */
'use server'
import { redirect } from 'next/navigation'
import { format } from 'date-fns'
/**
 * 회원 가입 처리
 * @param params : 쿼리스트링 값
 * @param formData
 */
export const processJoin = async (params, formData: FormData) => {
  //console.log('params', params)
  //const redirectUrl = params?.get('redirectUrl') ?? '/member/login'
  const redirectUrl = '/member/login'

  const form = {},
    errors = {}
  let hasErrors = false

  for (let [key, value] of formData.entries()) {
    if (key.includes('$ACTION')) continue

    if (key === 'birthDt' && value && value.trim()) {
      value = format(new Date(value), 'yyyy-MM-dd')
    }

    if (['false', 'true'].includes(value)) {
      value = value === 'true'
    }

    form[key] = value
  }

  console.log('form', form)

  // 회원가입 완료 후 이동
  redirect(redirectUrl)
}

/**
 * 로그인 처리
 *
 * @param params
 * @param formData
 */
export const processLogin = async (params, formData: FormData) => {}
