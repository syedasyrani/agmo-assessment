import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import agmoLogo from './assets/agmo-logo.png'
import banner from './assets/banner.jpg'

const schema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required(),
	password: Joi.string().required(),
	rememberMe: Joi.boolean(),
})

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: joiResolver(schema),
	})

	const onSubmit = (inputData) => {
		console.log(inputData)
	}

	return (
		<div className="min-h-screen flex flex-col md:flex-row">
			<div
				style={{
					backgroundImage: `url(${banner})`,
				}}
				className="w-full md:w-7/12 bg-cover bg-center"
			>
				<div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center py-8 px-20 md:p-0">
					<img
						src={agmoLogo}
						alt="agmo-logo"
						className="max-w-full max-h-full"
					/>
				</div>
			</div>
			<form
				className="w-full md:w-5/12 flex items-center justify-center p-8 md:px-28"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col flex-grow gap-10">
					<div className="flex flex-col gap-1">
						<h1 className="text-4xl">Hello,</h1>
						<h1 className="text-4xl">Welcome Back</h1>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<input
								{...register('email')}
								type="text"
								placeholder="E-Mail"
								className="border rounded-xl py-2 px-3"
							/>
							{errors.email && (
								<span className="text-sm text-red-400">
									{errors.email.message}
								</span>
							)}
						</div>

						<div className="flex flex-col gap-2">
							<input
								{...register('password')}
								type="password"
								placeholder="Password"
								className="border rounded-xl py-2 px-3"
							/>
							{errors.password && (
								<span className="text-sm text-red-400">
									{errors.password.message}
								</span>
							)}
						</div>
					</div>
					<div className="flex flex-row justify-between items-center">
						<div className="w-1/2 flex items-center">
							<input
								{...register('rememberMe')}
								type="checkbox"
								id="remember-me"
								className="hover:border-blue-100"
							/>
							<label
								htmlFor="remember-me"
								className="pl-2 text-sm"
							>
								Remember Me?
							</label>
						</div>
						<div className="w-1/2 flex justify-end">
							<a
								href="https://www.google.com/"
								className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
							>
								Forgot Your Password?
							</a>
						</div>
					</div>
					<div>
						<button
							type="submit"
							className="rounded-xl bg-gray-900 hover:bg-gray-800 text-sm text-white py-2 px-3"
						>
							Log In
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default App
