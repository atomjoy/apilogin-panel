import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import router from '@/router'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
	// State
	const user = ref(null)
	const loggedIn = ref(false)
	const error = ref(false)
	const message = ref(null)

	// Getters
	const isLoggedIn = computed(() => loggedIn)
	const getMessage = computed(() => message)
	const getError = computed(() => error)
	const getUser = computed(() => user)

	// Actions
	async function changeLocale(locale) {
		try {
			await axios.get('/web/api/locale/' + locale)
			console.log('Auth locale', locale)
		} catch (err) {
			logError(err)
		}
	}

	// Admin
	async function isAuthenticatedAdmin() {
		try {
			let res = await axios.get('/web/api/admin/logged')
			setAuth(res, false)
			console.log('Admin logged')
		} catch (err) {
			delAuth(err)
			logError(err)
		}
	}

	async function logoutUserAdmin() {
		try {
			await axios.get('/web/api/admin/logout')
			user.value = null
			loggedIn.value = false
			error.value = false
			message.value = ''
			router.push('/admin/login')
		} catch (err) {
			logError(err)
		}
	}

	async function loginUserAdmin(data) {
		try {
			let res = await axios.post('/web/api/admin/login', data)
			// F2a redirect
			if (res?.data?.redirect != null) {
				router.push(res?.data?.redirect) // redirection url
			}
			// Just login
			setAuth(res)
			router.push('/admin/panel') // redirection url
		} catch (err) {
			delAuth(err)
			logError(err)
		}
	}

	async function resetUserPasswordAdmin(data) {
		try {
			let res = await axios.post('/web/api/admin/password', data)
			setMessage(res)
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function loginUserF2aAdmin(data) {
		try {
			let res = await axios.post('/web/api/admin/f2a', data)
			setAuth(res)
			router.push('/admin/panel') // redirection url
		} catch (err) {
			delAuth(err)
			logError(err)
		}
	}

	async function enableF2aAdmin(data) {
		try {
			let res = await axios.post('/web/api/admin/f2a/enable', data)
			setMessage(res)
			user.value.f2a = 1
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function disableF2aAdmin(data) {
		try {
			let res = await axios.post('/web/api/admin/f2a/disable', data)
			setMessage(res)
			user.value.f2a = 0
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	// User
	async function isAuthenticated() {
		try {
			let res = await axios.get('/web/api/logged')
			setAuth(res, false)
		} catch (err) {
			delAuth(err)
			logError(err)
		}
	}

	async function registerUser(data) {
		try {
			let res = await axios.post('/web/api/register', data)
			setMessage(res)
			document.getElementById('registerForm').reset()
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function activateUser(id, code) {
		try {
			let res = await axios.get('/web/api/activate/' + id + '/' + code)
			setMessage(res)
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function loginUser(data) {
		try {
			let res = await axios.post('/web/api/login', data)
			// F2a redirect
			if (res?.data?.redirect != null) {
				router.push(res?.data?.redirect) // redirection url
			}
			// Just login
			setAuth(res)
			router.push('/client/panel') // redirection url
		} catch (err) {
			delAuth(err)
			logError(err)
		}
	}

	async function loginUserF2a(data) {
		try {
			let res = await axios.post('/web/api/f2a', data)
			setAuth(res)
			router.push('/client/panel') // redirection url
		} catch (err) {
			delAuth(err)
			logError(err)
		}
	}

	async function enableF2a(data) {
		try {
			let res = await axios.post('/web/api/f2a/enable', data)
			setMessage(res)
			user.value.f2a = 1
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function disableF2a(data) {
		try {
			let res = await axios.post('/web/api/f2a/disable', data)
			setMessage(res)
			user.value.f2a = 0
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function logoutUser() {
		try {
			await axios.get('/web/api/logout')
			user.value = null
			loggedIn.value = false
			error.value = false
			message.value = ''
			router.push('/login')
		} catch (err) {
			logError(err)
		}
	}

	async function changeUserPassword(data) {
		try {
			let res = await axios.post('/web/api/password/change', data)
			setMessage(res)
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function resetUserPassword(data) {
		try {
			let res = await axios.post('/web/api/password', data)
			setMessage(res)
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function changeUserEmail(data) {
		try {
			let res = await axios.post('/web/api/change/email', data)
			setMessage(res)
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function confirmUserEmail(id, code) {
		try {
			let res = await axios.get('/web/api/change/email/' + id + '/' + code)
			setMessage(res)
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function changeUserAvatar(data) {
		try {
			let res = await axios.post('/web/api/upload/avatar', data)
			setMessage(res)
			isAuthenticated()
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function changeUserProfil(data) {
		try {
			data.append('_method', 'PATCH')
			let res = await axios.post('/web/api/profile', data)
			setMessage(res)
			isAuthenticated()
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function changeUserAddress(data) {
		try {
			data.append('_method', 'PATCH')
			let res = await axios.post('/web/api/address', data)
			setMessage(res)
			isAuthenticated()
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	async function deleteUserAccount(data) {
		try {
			data.append('_method', 'PATCH')
			let res = await axios.post('/web/api/account/delete', data)
			setMessage(res)
			router.push('/logout')
		} catch (err) {
			setError(err)
			logError(err)
		}
	}

	function setAuth(res, show_message = true) {
		user.value = res?.data?.user ?? null
		if (user.value?.id && user.value?.email) {
			loggedIn.value = true
			if (show_message) {
				message.value = res?.data?.message ?? ''
				error.value = false
			}
		} else {
			loggedIn.value = false
			user.value = null
			error.value = true
			message.value = res?.data?.message ?? 'Unauthenticated.'
			throw new Error('Ups! Invalid user object.')
		}
	}

	function delAuth(err) {
		loggedIn.value = false
		user.value = null
		message.value = err?.response?.data?.message ?? err?.message ?? 'Unauthenticated.'
		error.value = true
	}

	function clearError() {
		message.value = null
		error.value = false
	}

	function setMessage(res) {
		message.value = res?.data?.message
		error.value = false

		console.log(res.data)
	}

	function setError(err) {
		message.value = err?.response?.data?.message ?? err?.message ?? 'Ups! Invalid data.'
		error.value = true
	}

	function updateMessage(msg) {
		message.value = msg
	}

	function updateError(err = true) {
		error.value = err
	}

	function logError(err) {
		if (err.response) {
			console.log('Exception', err.response.data)
		} else if (err.request) {
			console.log('Error request', err.request)
		} else {
			console.log('Error', err.message)
			console.log('Error config', err.config)
		}
	}

	function scrollTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return {
		changeLocale,
		isAuthenticated,
		isAuthenticatedAdmin,
		registerUser,
		activateUser,
		loginUser,
		loginUserAdmin,
		loginUserF2a,
		loginUserF2aAdmin,
		logoutUser,
		logoutUserAdmin,
		changeUserPassword,
		resetUserPassword,
		resetUserPasswordAdmin,
		changeUserEmail,
		confirmUserEmail,
		changeUserAddress,
		changeUserProfil,
		changeUserAvatar,
		deleteUserAccount,
		clearError,
		scrollTop,
		updateMessage,
		updateError,
		isLoggedIn,
		getMessage,
		getError,
		getUser,
		enableF2a,
		disableF2a,
		enableF2aAdmin,
		disableF2aAdmin,
	}
})
