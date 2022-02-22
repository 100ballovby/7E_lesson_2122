## Атрибуты и свойства

<p>Когда браузер загружает страницу, он «читает» (также говорят: «парсит») HTML и генерирует
    из него DOM-объекты. Для узлов-элементов большинство стандартных HTML-атрибутов автоматически становятся свойствами
    DOM-объектов.</p>
<p>Например, для такого тега <code>&lt;body id="page"&gt;</code> у DOM-объекта будет такое свойство
    <code>body.id="page"</code>.
</p>
<p>Но преобразование атрибута в свойство происходит не один-в-один! В этой главе мы уделим внимание различию этих
    двух понятий, чтобы посмотреть, как работать с ними, когда они одинаковые и когда разные.</p>
<h2><a class="main__anchor" name="dom-svoystva" href="#dom-svoystva">DOM-свойства</a></h2>
<p>Ранее мы уже видели встроенные DOM-свойства. Их много. Но технически нас никто не ограничивает, и если этого мало
    – мы можем добавить своё собственное свойство.</p>
<p>DOM-узлы – это обычные объекты JavaScript. Мы можем их изменять.</p>
<p>Например, создадим новое свойство для <code>document.body</code>:</p>
<pre class="line-numbers  language-javascript" tabindex="0"><code>
document.body.myData = {
    name: 'Caesar',
    title: 'Imperator'
};

alert(document.body.myData.title); // Imperator</code></pre>

<p>Мы можем добавить и метод:</p>
<pre class="line-numbers  language-javascript" tabindex="0"><code>document.body.sayTagName = function() {alert(this.tagName);
};
document.body.sayTagName(); // BODY (значением "this" в этом методе будет document.body)
</code></pre>

</div>

<p>Также можно изменять встроенные прототипы, такие как <code>Element.prototype</code> и добавлять новые методы ко
    всем элементам:</p>
<pre class="line-numbers  language-javascript" tabindex="0"><code>
Element.prototype.sayHi = function() {
alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
</code></pre>

<p>Итак, DOM-свойства и методы ведут себя так же, как и обычные объекты JavaScript:</p>
<ul>
    <li>Им можно присвоить любое значение.</li>
    <li>Они регистрозависимы (нужно писать <code>elem.nodeType</code>, не <code>elem.NoDeTyPe</code>).</li>
</ul>
<h2><a class="main__anchor" name="html-atributy" href="#html-atributy">HTML-атрибуты</a></h2>
<p>В HTML у тегов могут быть атрибуты. Когда браузер парсит HTML, чтобы создать DOM-объекты для тегов, он распознаёт
    <em>стандартные</em> атрибуты и создаёт DOM-свойства для них.</p>
<p>Таким образом, когда у элемента есть <code>id</code> или другой <em>стандартный</em> атрибут, создаётся
    соответствующее свойство. Но этого не происходит, если атрибут нестандартный.</p>
<p>Например:</p>

<pre><code>
&lt;body id="test" something="non-standard"&gt;
  &lt;script&gt;
    alert(document.body.id); // test
    // нестандартный атрибут не преобразуется в свойство
    alert(document.body.something); // undefined
  &lt;/script&gt;
&lt;/body&gt;
</code></pre>


<p>Пожалуйста, учтите, что стандартный атрибут для одного тега может быть нестандартным для другого. Например,
    атрибут <code>"type"</code> является стандартным для элемента <code>&lt;input&gt;</code> (<a
            href="https://html.spec.whatwg.org/#htmlinputelement">HTMLInputElement</a>), но не является стандартным
    для <code>&lt;body&gt;</code> (<a href="https://html.spec.whatwg.org/#htmlbodyelement">HTMLBodyElement</a>).
    Стандартные атрибуты описаны в спецификации для соответствующего класса элемента.</p>
<p>Мы можем увидеть это на примере ниже:</p>

<pre><code>
&lt;body id="body" type="..."&gt;
  &lt;input id="input" type="text"&gt;
  &lt;script&gt;
    alert(input.type); // text
    alert(body.type); // undefined: DOM-свойство не создалось, потому что оно нестандартное
  &lt;/script&gt;
&lt;/body&gt;
</code></pre>

<p>Таким образом, для нестандартных атрибутов не будет соответствующих DOM-свойств. Есть ли способ получить такие
    атрибуты?</p>
<p>Конечно. Все атрибуты доступны с помощью следующих методов:</p>
<ul>
    <li><code>elem.hasAttribute(name)</code> – проверяет наличие атрибута.</li>
    <li><code>elem.getAttribute(name)</code> – получает значение атрибута.</li>
    <li><code>elem.setAttribute(name, value)</code> – устанавливает значение атрибута.</li>
    <li><code>elem.removeAttribute(name)</code> – удаляет атрибут.</li>
</ul>
<p>Эти методы работают именно с тем, что написано в HTML.</p>
<p>Кроме этого, получить все атрибуты элемента можно с помощью свойства <code>elem.attributes</code>: коллекция
    объектов, которая принадлежит ко встроенному классу <a href="https://dom.spec.whatwg.org/#attr">Attr</a> со
    свойствами <code>name</code> и <code>value</code>.</p>
<p>Вот демонстрация чтения нестандартного свойства:</p>

<pre><code>
&lt;body something="non-standard"&gt;
  &lt;script&gt;
    alert(document.body.getAttribute('something')); // non-standard
  &lt;/script&gt;
&lt;/body&gt;
</code></pre>

<p>У HTML-атрибутов есть следующие особенности:</p>
<ul>
    <li>Их имена регистронезависимы (<code>id</code> то же самое, что и <code>ID</code>).</li>
    <li>Их значения всегда являются строками.</li>
</ul>
<p>Расширенная демонстрация работы с атрибутами:</p>

<pre><code>
&lt;body&gt;
  &lt;div id="elem" about="Elephant"&gt;&lt;/div&gt;

  &lt;script&gt;
    alert( elem.getAttribute('About') ); // (1) 'Elephant', чтение

    elem.setAttribute('Test', 123); // (2), запись

    alert( elem.outerHTML ); // (3), посмотрим, есть ли атрибут в HTML (да)

    for (let attr of elem.attributes) { // (4) весь список
        alert( `${attr.name} = ${attr.value}` );
    }
  &lt;/script&gt;
&lt;/body&gt;
</code></pre>

<p>Пожалуйста, обратите внимание:</p>
<ol>
    <li><code>getAttribute('About')</code> – здесь первая буква заглавная, а в HTML – строчная. Но это не важно:
        имена атрибутов регистронезависимы.
    </li>
    <li>Мы можем присвоить что угодно атрибуту, но это станет строкой. Поэтому в этой строчке мы получаем значение
        <code>"123"</code>.
    </li>
    <li>Все атрибуты, в том числе те, которые мы установили, видны в <code>outerHTML</code>.</li>
    <li>Коллекция <code>attributes</code> является перебираемой. В ней есть все атрибуты элемента (стандартные и
        нестандартные) в виде объектов со свойствами <code>name</code> и <code>value</code>.
    </li>
</ol>
<h2><a class="main__anchor" name="sinhronizatsiya-mezhdu-atributami-i-svoystvami"
       href="#sinhronizatsiya-mezhdu-atributami-i-svoystvami">Синхронизация между атрибутами и свойствами</a></h2>
<p>Когда стандартный атрибут изменяется, соответствующее свойство автоматически обновляется. Это работает и в
    обратную сторону (за некоторыми исключениями).</p>
<p>В примере ниже <code>id</code> модифицируется как атрибут, и можно увидеть, что свойство также изменено. То же
    самое работает и в обратную сторону:</p>

<pre><code>
&lt;input&gt;

&lt;script&gt;
  let input = document.querySelector('input');

  // атрибут => свойство
  input.setAttribute('id', 'id');
  alert(input.id); // id (обновлено)

  // свойство => атрибут
  input.id = 'newId';
  alert(input.getAttribute('id')); // newId (обновлено)
&lt;/script&gt;

</code></pre>

<h2><a class="main__anchor" name="dom-svoystva-tipizirovany" href="#dom-svoystva-tipizirovany">DOM-свойства
типизированы</a></h2>
<p>DOM-свойства не всегда являются строками. При этом некоторые из них, хоть и строки, могут отличаться от атрибутов. Например, DOM-свойство <code>href</code>
    всегда содержит <em>полный</em> URL, даже если атрибут содержит относительный URL или просто <code>#hash</code>.
</p>
<p>Ниже пример:</p>

<pre><code>
&lt;a id="a" href="#hello"&gt;link&lt;/a&gt;
&lt;script&gt;
  // атрибут
  alert(a.getAttribute('href')); // #hello

  // свойство
  alert(a.href ); // полный URL в виде http://site.com/page#hello
&lt;/script&gt;
</code></pre>

<p>Если же нужно значение <code>href</code> или любого другого атрибута в точности, как оно записано в HTML, можно
    воспользоваться <code>getAttribute</code>.</p>

<h2><a class="main__anchor" name="itogo" href="#itogo">Итого</a></h2>
<ul>
    <li>Атрибуты – это то, что написано в HTML.</li>
    <li>Свойства – это то, что находится в DOM-объектах.</li>
</ul>
<p>Небольшое сравнение:</p>
<table>
    <thead>
    <tr>
        <th></th>
        <th>Свойства</th>
        <th>Атрибуты</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Тип</td>
        <td>Любое значение, стандартные свойства имеют типы, описанные в спецификации</td>
        <td>Строка</td>
    </tr>
    <tr>
        <td>Имя</td>
        <td>Имя регистрозависимо</td>
        <td>Имя регистронезависимо</td>
    </tr>
    </tbody>
</table>
<p>Методы для работы с атрибутами:</p>
<ul>
    <li><code>elem.hasAttribute(name)</code> – проверить на наличие.</li>
    <li><code>elem.getAttribute(name)</code> – получить значение.</li>
    <li><code>elem.setAttribute(name, value)</code> – установить значение.</li>
    <li><code>elem.removeAttribute(name)</code> – удалить атрибут.</li>
    <li><code>elem.attributes</code> – это коллекция всех атрибутов.</li>
</ul>
<p>В большинстве ситуаций предпочтительнее использовать DOM-свойства. Нужно использовать атрибуты только тогда,
    когда DOM-свойства не подходят, когда нужны именно атрибуты, например:</p>
<ul>
    <li>Нужен нестандартный атрибут. Но если он начинается с <code>data-</code>, тогда нужно использовать
        <code>dataset</code>.
    </li>
    <li>Мы хотим получить именно то значение, которое написано в HTML. Значение DOM-свойства может быть другим,
        например, свойство <code>href</code> – всегда полный URL, а нам может понадобиться получить «оригинальное»
        значение.
    </li>
</ul>