class Person extends Component {
    constructor(name) {
        super();
        this.name = name;
        this._happiness = 0;
        this._valueElement = document.querySelector(`.column__value-name`);
        this._iconElement = document.querySelector(`.column__value-icon`);
    }

    hasCat() {
        return this._happiness++;
    }

    hasRest() {
        return this._happiness++;
    }

    hasMoney() {
        return this._happiness++;
    }

    isSunny() {
        const APIKey = '28c7d687accc7c75aabbc7fb71173feb';
        const city = 'Москва';
        /*
            Можно лучше: оператор + может повести себя неожиданно, если вместо города или ключа Вам придет
            что-то вроде null или undefined. Лучше использовать шаблонную строку `какая-то строка ${myCity} ${myKey}`.
        */
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

        return fetch(url)
            .then(res => res.json())
            .then((res) => {
              console.log(this._happiness);
              /*
                  Можно лучше: Если у res.main.temp не придет поле main, такая операция вызовет ошибку.
                  Однако, есть способ ее избежать, использовав optional chaining: res.main?.temp. Более подробно об
                  optional chaining можно прочитать здесь:
                  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
              */
                if (res.main.temp - 273 > 15) {
                    return this._happiness++;
                }
            });
      }
}
