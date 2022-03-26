class Component {
	constructor() {
		if (new.target === Component) {
			throw new Error(`Can't instantiate Component, only concrete one.`);
		}
	}

	get template() {
		throw new Error(`You have to define template.`);
	}

	static createElement(template) {
		/* Пример замечания:
			Надо исправить: для наименования переменных следует использовать существительные
		*/
		const createNewTag = document.createElement(`div`);
		createNewTag.innerHTML = template;
		return createNewTag.firstChild;
	}

	render() {
		this._element = Component.createElement(this.template);
		this.setEventListener();
		return this._element;
	}
	/*
	  Можно лучше:
	  - лучше отступать между функциями / переменными одинаковое кол-во строк для улучшения читабельности.
	  	чтобы не делать этого вручную, в больших проектах обычно настраивают линтер и prettier.
	  	Более подробно о них можно почитать здесь:
	  	https://eslint.org/ и https://prettier.io/.
	*/
	removeItem() {
		this.removeEventListener();
		this._element.remove();
		this._element = null;
	}

	setEventListener() {}
	removeEventListener() {}
	/*
	  Можно лучше: лучше не оставлять лишних пустых строк в файле. Для автоматизации можно также воспользоваться
	  линтером и prettier (https://eslint.org/ и https://prettier.io/).
	*/

}
