function factory(components = {}) {
	const install = (Vue) => {
		if (install.installed) {
			return
		}

		install.installed = true

		Object.keys(components).forEach((name) => {
			Vue.component(name, components[name])
		})
	}

	install.installed = false

	return install
}

export default factory
