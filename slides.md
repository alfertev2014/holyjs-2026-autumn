---
theme: ./theme
colorSchema: dark
title: Инкрементальные вычисления в UI-фреймворках
info: |
  ## Инкрементальные вычисления в UI-фреймворках
  Слайды к докладу на HolyJS 2026 Autumn
class: text-center
fonts:
  sans: Google Sans
  mono: Cascadia Code
drawings:
  persist: false
comark: true
---

<h1>Инкрементальные вычисления <br/>в UI-фреймворках</h1>

<!--
Всех ещё раз приветствую!

Как видно из названия доклада, я сейчас буду говорить о фреймворках и одной любопытной модели вычислений.
-->

---
level: 1
hideInToc: true
---

# Приятно познакомиться

<div class="grid grid-cols-2 gap-4 items-center">
  <div class="flex gap-x-2 text-2xl items-center"><img src="./images/vasya.jpg" style="border-radius: 50%" /><div><b>Василий Алфертьев</b></div></div>
  <div>
    <img src="./images/osinit.png" style="width: 300px" />
  </div>
  <div>
    <p><logos-telegram style="display: inline; width: 32px; height: 32px" /> <b>Telegram</b>: <a href="https://t.me/alfertev2012">@alfertev2012</a></p>
    <p><logos-github-icon style="display: inline; width: 32px; height: 32px;background:white;border-radius:50%"/> <b>GitHub</b>: <a href="https://github.com/alfertev2014">@alfertev2014</a></p>
  </div>
  <div class="flex gap-3 items-center">
    <logos-react style="display: inline; width: 64px; height: 64px" /><div>React</div>
    <div></div>
    <logos-typescript-icon style="display: inline; width: 64px; height: 64px" /><div>TypeScript</div>
  </div>
</div>

<!--
Давайте расскажу вам, кто я такой. Я Василий Алфертьев, в настоящее время - frontend-разработчик в компании Открытые решения, пишу в основном на React-е, обязательно с TypeScript-ом, люблю придерживаться строгой типизации и вообще люблю, когда абстракции строгие.
-->
---
level: 2
hideInToc: true
---

# Чем ещё владею

<style>
li {
  margin-block: 0;
  line-height: 1.4rem;
}
</style>
<div class="grid grid-cols-2 gap-x-4 gap-y-2">

<div>
  <ul>
    <li>5+ лет в <logos-c-plusplus /> <b>C++</b>
      <ul>
        <li>системное программирование</li>
        <li><logos-linux-tux/> Linux</li>
        <li>UI на <logos-qt/></li>
      </ul>
    </li>
  </ul>
</div>
<div v-click="1">
  <ul>
    <li>Увлекаюсь
      <ul>
        <li>дизайном языков программирования</li>
        <li>best practices и архитектурой ПО</li>
        <li>computer science</li>
      </ul>
    </li>
  </ul>
</div>
<div>
  <ul>
    <li>~6 лет в <logos-java/> <b>Java</b>
      <ul>
        <li>backend на <logos-spring/></li>
        <li>базы данных</li>
        <li>монолиты, микросервисы…</li>
      </ul>
    </li>
  </ul>
</div>
<div v-click="1">
  <ul>
    <li>Тянет разбираться в
      <ul>
        <li>компиляторах, IDE и инструментах</li>
        <li v-mark.circle.red="2"><b>Устройстве UI-фреймворков и библиотек</b></li>
      </ul>
    </li>
  </ul>
</div>
</div>

<!--
1. Когда-то занимался и системным программированием на C++, писал UI на Qt, прошёл через backend-разработку на Java.

2. Параллельно много погружался в различные интересные темы computer science, связанные, в основном, с компиляторами и языками.

3. И с развитием Web-технологий UI-фреймворки для меня становились всё более интересны изнутри. О них я и буду говорить в докладе.
-->
---
level: 2
layout: center
---

# UI-фреймворки

<!--
Итак, UI-фреймворки. Прежде чем начать, давайте посмотрим, кто сейчас в зале.
-->
---
level: 2
layout: center
background: ''
style: 'background-color: white'
---

<style>
  .caption {
    color: black;
    font-size: 1.5em;
    font-weight: 700;
  }
</style>

<img src="./images/statistics.png" style="width:90%;margin:0 auto" />

<div v-drag="[243,31,538,74]" class="caption"><logos-vue/> Vue лучше, чем <logos-react/> React!</div>

<div v-drag="[652,132,260,96]" class="caption">Я просто пишу на <logos-jquery/></div>

<div v-drag="[98,177,268,116]" class="caption">Я просто пишу на <logos-jquery/></div>

<!--
Кто пишет на React, поднимите руку? А у кого основной фреймворк - это Vue? Ангулярщики есть в зале? Svelte? А кто хотя бы знаком с Solid JS?

Да, были времена, когда новые JavaScript-фреймворки выходили каждый день, и были популярны холивары на тему, какой же фреймворк чем лучше. Каждый защищал свой любимый фреймворк. Разработчики любили спорить, сравнивать...
-->

---
level: 3
layout: image
image: ./images/tierlist.png
backgroundSize: contain
---

<!--
Составляли tier-листы... Это, кстати, мой.

Да и сейчас, в эпоху ИИ это всё ещё продолжается.
-->
---
level: 3
---

# Чего мы хотим от UI-фреймворка?

<div>
<br />

<div class="text-xl" v-click>

<p>Повышение <span v-mark.red="[1,2]">продуктивности</span> при разработке UI</p>

</div>

<v-clicks>
  <ul>
    <li>Улучшение Developer Experience <span v-mark.red="[2,3]">в понятной парадигме</span></li>
    <li><span v-mark.red="3">Автоматически</span> оптимизированный результат</li>
  </ul>
</v-clicks>
</div>

<!--
Потому что экосистема всё ещё в поисках, как бы сделать ещё лучше. Мы постоянно хотим, чтобы что-то стало лучше: мы ждём новых версий, новых возможностей.

А чего же мы хотим от UI-фреймворка, как и от любого другого инструмента или решения?

1. Это, конечно же, повышение нашей продуктивности по сравнению с работой без него. И здесь есть два аспекта: 
2. Мы хотим, чтобы код можно было писать удобно для нас - в понятной парадигме. Это так называемый Developer Experience.
3. И в то же время мы хотим, чтобы этот код не тормозил, не съедал много памяти - и всё это было волшебным образом, само собой, автоматически.

Фреймворк бы взял на себя большую часть этих забот, чтобы мы сосредоточили своё внимание на том, что по настоящему *специфично* для проекта. Мы хотим оставаться в той абстракции, которая нам интересна, а фреймворк должен быть инструментом обеспечения её корректной реализации, забирая от нас необходимость погружаться в низкоуровневые детали.
-->
---
level: 3
---

# О чём доклад

<v-clicks>

- UI-фреймворк создаёт слой абстракции
- Ментальная модель UI - дерево компонентов, состояние, представление, события, цикл обновления
- **Инкрементальные вычисления** - реактивное обновление чистых функций
- "Proof-of-concept" UI-фреймворк
- Соглашения, допущения и ограничения

</v-clicks>

<!--
1. Поэтому рассказывать я буду о том, как фреймворк создаёт такой слой абстракции,
2. Которая опирается на некую ментальную модель UI - наши представления об интерфейсах, то, как мы мыслим про UI, даже то, как пользователь воспринимает UI - в виде дерева компонентов со своей внутренней логикой работы.
3. Посмотрим на интересную идею инкрементальных вычислений - немного другой взгляд на реактивность, как она находит своё воплощение в существующих фреймворках.
4. Попробуем представить, как бы выглядел фреймворк, если эту идею попробовать реализовать буквально.
5. И, конечно же, какие при этом условия мы должны выдержать, чтобы абстракция не рассыпалась.
-->
---
level: 3
---

# Ключевые моменты

<div class="grid grid-cols-2 gap-4 text-center">
  <div class="card" style="--card-color:var(--brand-color-5)" v-click>
    <div class="card-header">🚀 Реактивность</div>
    <div class="card-body">
      <p>Обновление представления <br/> при изменении состояния</p>
    </div>
  </div>
  <div class="card" style="--card-color:var(--brand-color-4)" v-click>
    <div class="card-header">📜 Декларативность</div>
    <div class="card-body">
      <p>Структура и поведение UI - <br/> на декларативном DSL</p>
    </div>
  </div>
</div>
<div class="card text-center" style="--card-color:var(--brand-color-1);margin:1em auto;width:50%" v-click>
  <div class="card-header">✅ Строгость</div>
  <div class="card-body">
    <p>Строгая типизация, строгие абстракции, <br/> соглашения и ограничения</p>
  </div>
</div>

<!--
Итак, за своё время во front-end-e, я успел поизучать и попробовать разные известные и не очень фреймворки. Пытался даже разрабатывать без фреймворка чисто на JS и нативных API браузера.

И отметил для себя следующие ключевые моменты, которые трудно самому переизобретать и обеспечивать на Vanilla JS. Из-за чего и требуется фреймворк. Это:
1. Реактивность - она везде нужна. И не так тривиально делается, как может наивно показаться.
2. Декларативность - хочешь-не-хочешь, а много в UI требуется описывать структуры и связей, вырабатывать свой язык для выразительности. Ведь, грамотно спроектировать API дорогого стоит.
3. И Строгость - чтобы обезопасить себя от неправильного использования. Сюда же относится и типизация, и ограничения, чтобы оставаться в абстракции фреймворка.

Именно эти вещи и способствуют повышению developer experience и позволяют фреймворку иметь эффективную реализацию.
-->
---
level: 3
background: ''
class: bg-image-gradient-right
style: '--slide-background-image: url(./images/layers.jpg)'
---

<style>
  li {
    transform: translateX(calc((sibling-count() - sibling-index()) * 1em));
  }
</style>

<v-drag-arrow pos="47,336,58,0" v-click style="color:var(--brand-color-3)"/>

# Фреймворки и слои абстракции

<ul>
<li>Коробочные решения</li>
<li>Конструкторы сайтов, CMS, NoCode</li>
<li>Каталоги готовых компонентов, LowCode</li>
<li>UI-киты, дизайн-системы</li>
<li>Библиотеки компонентов, утилит и тем</li>
<li><span class="contrast-bg"><strong>Слой абстракции с другой парадигмой</strong> <logos-react /> <logos-vue/> <logos-angular-icon/> <logos-svelte-icon/> <logos-solidjs-icon/> <logos-preact /> <logos-ember/>  ...</span></li>
<li>Общие Javascript-библиотеки для типовых задач</li>
<li>Язык JavaScript и его runtime</li>
</ul>

<!--
Как я уже сказал, фреймворк определяет свой слой абстракции. Давайте сейчас определимся, что мы будем называть фреймворками в докладе. Ведь кто-то мог бы назвать фреймворками целые UI-киты или даже больше, позволяющие сразу собрать полноценное приложение из готовых компонентов. Мы же будем рассматривать только самый низкий уровень, поднимающий нас над JavaScript. Любые такие фреймворки наподобие React или Vue создают свой слой абстракции, который в каком-то смысле меняет парадигму языка, на котором они стоят, то есть JavaScript. Они создают как бы свой особенный язык со своими соглашениями, и мы уже не пишем на нижележащем JavaScript.
-->

---
level: 3
---

# Фреймворки похожи друг на друга

<div style="position:relative">
  <div class="text-center grid grid-cols-2 fill-container" v-click="1">
<div>

**Дерево компонентов**

<img src="./drawio/components_tree.drawio.svg" style="margin: 0 auto;width:70%" />

</div>
<div>

**Цикл обновления**

<img src="./drawio/update_cycle.drawio.svg" style="margin: 0 auto;width:70%" />
</div>
</div>
  <div class="fill-container" v-click.hide="1">
    <img src="./images/actors.png" style="margin:0 auto;width:70%" />
  </div>
</div>

<!--
И так как абстракция, к которой мы стремимся, для всех фреймворков одна - это некая ментальная модель UI - то все популярные фреймворки в последнее время стали похожи друг на друга и обмениваются одиними удачными идеями реализации. Практически везде можно увидеть компонентную модель и привычный уже всем цикл обновления представления при изменении состояния.
-->

---
level: 3
---

# MVC --> MVP --> MVVM --> ...

<div class="text-center flex flex-col gap-y-4">
<v-click>

<img src="./drawio/mvc.drawio.svg" style="margin:0 auto" />

</v-click>
<v-click>

<img src="./drawio/mvp.drawio.svg" style="margin:0 auto" />

</v-click>
<v-click>

<img src="./drawio/mvpm.drawio.svg" style="margin:0 auto" />

</v-click>

<v-click>

<img src="./drawio/mvvm.drawio.svg" style="margin:0 auto" />

</v-click>
</div>

<!--
различные паттерны MVC, MVP, MVVM. Если честно, я сам до конца не понимаю всех тонкостей различия между ними. Я лишь могу понять, что в какие-то моменты логика описана императивно, а в какие декларативно. Сложные интерактивные и динамичные UI всегда завязаны на организацию взаимодействия между моделью и представлением.
-->
---
level: 3
---

<div class="grid grid-cols-3 gap-1 text-center">
  <p>Состояние</p>
  <p>Логика</p>
  <p>Представление</p>
  <div style="position:relative">
    <div class="fill-container flex items-center justify-center" v-click.hide="3">
      <img src="./drawio/state_tree.drawio.svg" style="width:70%" />
    </div>
    <div class="fill-container flex items-center justify-center" v-click="3">
      <img src="./drawio/changed_state_tree.drawio.svg" style="width:70%" />
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="./drawio/code_logic.drawio.svg" style="width:70%" />
  </div>
  <div style="position:relative">
    <div class="fill-container flex items-center justify-center">
      <img src="./drawio/view_tree.drawio.svg" style="width:80%" />
    </div>
    <div class="fill-container flex items-center justify-center">
      <img src="./drawio/fire_event.drawio.svg" v-click="[1,3]" style="width:40%;position:absolute;right:5%;top:40%" />
    </div>
    <div class="fill-container flex items-center justify-center">
      <img v-click="5" src="./images/tychevonadelal.jpg" style="width:100%" />
    </div>
  </div>
</div>

<v-drag-arrow pos="546,319,84,-1" v-click="4"/>
<v-drag-arrow pos="547,239,85,-1" v-click="4"/>
<v-drag-arrow pos="788,268,-307,-158" v-click="[2,3]"/>
<v-drag-arrow pos="415,166,-150,0" v-click="3"/>

<!--
Были времена, когда считалось нормой на основе начального состояния отрисовать представление,

1. а потом по событиям взаимодействия с ним
2. запустить отдельную императивную логику, form1::button1_on_click, в которой
3. менять данные состояния и одновременно стараться выполнить все необходимые действия по обновлению представления. Например, прямыми DOM-manipulation. В лучшем случае, эти действия будут организованы в вызовы вроде updateUI.
4. И можно было легко было ошибиться, сделать что-то не то и не в тот момент, или забыть сделать... и получить представление в неконсистентном виде, не соответствующим состоянию.
-->

---
level: 3
layout: image
image: images/hands_shadow.jpg
---

<div v-drag="[85,109,113,33]">Состояние</div>

<div v-drag="[621,418,170,33]">Представление</div>

<!--
Но нам бы было очень удобно считать представление как некую проекцию состояния. Живую проекцию с некоторыми трансформациями, которая при любом изменении состояния изменяется как бы сама сразу.
-->
---
level: 2
---

# Чистые функции

<br/>
<div>
  <img src="./drawio/pure_function_cycle.drawio.svg" style="margin: 0 auto;width:70%" />
</div>

<!--
Поэтому стала популярна идея функционального программирования во фронтенде. Представление описывается чистой функцией от состояния - без побочных эффектов и своего внутреннего состояния. Для одного и того же состояния в аргументе она выдаст одно и то же представление в результате.

Если какое-то событие требует изменение в состоянии, то оно оформляется в виде сообщения-действия, при котором выстраивается новая версия состояния со всеми необходимыми изменениями. И для этой новой версии должна снова запуститься функция для создания новой версии представления.

Если реализовать эту идею влоб, как это я только что описал, звучит страшно. Ведь мы каждый раз вынуждены выстраивать новые объекты. И самое главное - запускать всю функцию целиком.
-->
---
level: 3
---

# Изменения в данных

<div class="grid grid-cols-2 gap-4 text-center">
  <div v-click>
    <p>Immutable data</p>
    <img src="./drawio/state_tree_versions.drawio.svg" style="margin: 0 auto;width:90%" />
  </div>
  <div v-click>
    <p>Mutable data</p>
    <img src="./drawio/state_tree_patch.drawio.svg" style="margin: 0 auto;width:80%" />
  </div>
</div>

<!--
И отдельный вопрос: как будет выглядеть описание логики изменений данных по событию в коде.

1. Можно создавать новую версию данных целиком со всеми необходимыми изменениями. Ведь функциональное программирование допускает только immutable-данные.
2. А можно явно указать, что мы хотим в определённых местах дерева данных поместить вот такие значения.

И нельзя сказать однозначно, что удобнее. Но на мой взгляд, бывают моменты, когда намного выразительнее будет просто оператором присваивания написать, что в дереве состояния вот по этой ссылке в следующий момент должно лежать вот такое значение. И это как бы будет означать, что у нас новая версия состояния, и функция представления сама автоматически пересчитается. В идеале, ей не нужно пересчитываться всей целиком, а отреагировать только на изменения в этих точках данных.
-->
---
level: 2
---

# Инкрементальные вычисления

<div style="position:relative;height:300px">
  <div class="fill-container" v-click.hide="1">
    <br/><br/>
    <img src="./drawio/pure_function.drawio.svg" style="margin: 0 auto;width:80%" />
  </div>
  <div class="fill-container grid grid-cols-3 gap-1 text-center" v-click="1">
    <div style="position:relative">
      <div class="fill-container flex items-center justify-center" v-click="[1,3]">
        <img src="./drawio/state_tree.drawio.svg" style="margin: 0 auto;width:70%" />
      </div>
      <div class="fill-container flex items-center justify-center" v-click="[3,5]">
        <img src="./drawio/changed_state_tree.drawio.svg" style="margin: 0 auto;width:70%" />
      </div>
      <div class="fill-container flex items-center justify-center" v-click="5">
        <img src="./drawio/changed_state_tree_2.drawio.svg" style="margin: 0 auto;width:70%" />
      </div>
    </div>
    <div style="position:relative">
      <div class="fill-container flex items-center justify-center" v-click="[1,4]">
        <img src="./drawio/func_logic.drawio.svg" style="margin: 0 auto" />
      </div>
      <div class="fill-container flex items-center justify-center" v-click="[4,5]">
        <img src="./drawio/changed_func_logic.drawio.svg" style="margin: 0 auto" />
      </div>
      <div class="fill-container flex items-center justify-center" v-click="5">
        <img src="./drawio/changed_func_logic_2.drawio.svg" style="margin: 0 auto" />
      </div>
    </div>
    <div style="position:relative">
      <div class="fill-container flex items-center justify-center" v-click="[1,4]">
        <img src="./drawio/view_tree.drawio.svg" style="margin: 0 auto;width:70%" />
      </div>
      <div class="fill-container flex items-center justify-center" v-click="[4,5]">
        <img src="./drawio/changed_view_tree.drawio.svg" style="margin: 0 auto;width:70%" />
      </div>
      <div class="fill-container flex items-center justify-center" v-click="5">
        <img src="./drawio/changed_view_tree_2.drawio.svg" style="margin: 0 auto;width:70%" />
      </div>
      <img src="./drawio/fire_event.drawio.svg" v-click="[2,3]" style="margin: 0 auto;width:40%;position:absolute;right:10%;top:40%" />
    </div>
  </div>
</div>

<!--
В этом и состоит основная идея инкрементальных вычислений.
Есть у нас чистая функция, преобразующая некоторый аргумент в результат без побочных эффектов. Представьте, что тут аргумент - состояние UI -  может быть большой и сложный, например, целое дерево данных. Функция тоже может быть композицией других функций - композицией компонентов. И результат - представление -  тоже большое и сложное дерево.

1. И если мы по событию
2. внесём небольшие изменения в состояние, то вместо того, чтобы делать полный перезапуск вычисления всей функции,
3. мы хотели бы сделать такие минимальные действия, основанные на коде этой функции, чтобы точечно изменить результат, оставшийся от предыдущих вычислений. Кроме того, мы бы и все промежуточные вычисления выполняли только те, которые зависят от изменений состояния, а всё остальное нам пересчитывать незачем.
-->

---
level: 3
---

# Инкрементальные вычисления

<ul>
  <li v-click>Остаёмся в привычной модели:
    <ul>
      <li>рендеринг - чистые функции</li>
      <li>изменения состояния - мутирующие операции</li>
    </ul>
  </li>
  <li v-click>Минимизация вычислений и аллокаций</li>
  <li v-click="4">...</li>
  <li v-click="5">PROFIT!!!</li>
</ul>

<div v-drag="[627,123,318,257]" v-click="[3,4]">
  <img src="./images/netochno.jpeg" />
</div>

<!--
1. Таким образом мы остаёмся в понятной для нас парадигме, у нас код компонентов - это просто чистые функции, трансформирующие состояние в представление, и изменения состояния мы описываем так, как нам удобно, хоть операторами присваивания.
2. При этом реализация исполнения сама устроена таким образом, что мы минимизируем лишние вычисления и неоправданное создание объектов, чтобы не нагружать сборщик мусора.

Но сразу сделаю дисклеймер: Я не буду рассматривать и рассуждать об итоговой производительности, потому что здесь не всё однозначно, и надо подтверждать экспериментами.
-->

---
level: 3
---

# Инкрементальные вычисления

- **🚀 Реактивность**:
  - обновление результата при изменении входных данных
- **📜 Декларативность**:
  - описание результата как чистой функции от входных данных, <br/> а изменений состояния как действий - всё в виде DSL
- **✅ Строгость**:
  - легче обеспечить соблюдение соглашений <br/>для гарантий корректности и избежания ошибок

<!--
И далее мы разберём, как инкрементальные вычисления вписываются во фреймворк, в разрезе трёх ключевых аспектов.
1. Здесь очевидно просматривается реактивность, мы описываем data-flow, по которому протекают изменения.
2. Наше описание довольно декларативно, мы не программируем никакой логики на JavaScript, а пишем всё на ограниченном DSL
3. И так как наши декларации - это по большей части чистые функции, их проще типизировать, их проще тестировать. Нам надо лишь соблюдать соглашения и не выходить за рамки DSL, чтобы мы были уверены в этой абстракции.
Итак, начнём рассмотрение реализации инкрементальных вычислений с такого сложного механизма организации движения данных между состоянием и представлением как
-->
---
level: 2
background: ''
class: bg-image-gradient-right
style: '--slide-background-image: url(images/rocket.jfif)'
---

<br/><br/><br/>

# 🚀 Реактивность

<!--
...реактивность.

Тема реактивности мне давно интересна. Но она достаточно широкая, и каждый может под реактивностью понимать что-то своё. Я бы даже сказал, что существуют разные виды реактивности, вообще отличающиеся друг от друга, но отдельного удачного термина под каждую реактивность не нашлось.

1. В самом общем приближении под реактиновстью можно считать автоматическое выполнение каких-то реакций в ответ на изменение данных.
-->
---
level: 3
---

# Разновидности реактивности

<style>
li {
  margin-block: 0;
  line-height: 1.4rem;
}
</style>
<div class="grid grid-cols-2 gap-4">
<div class="card" style="--card-color:var(--brand-color-5)" v-click>
<div class="card-header">Ориентированные на данные</div>
<div class="card-body">

- первичные и производные данные
- граф зависимостей

</div>
<div class="card-footer flex justify-around text-xl"><span><logos-mobx/> MobX</span><span><logos-vue/> Vue</span><span><logos-solidjs-icon/> Solid</span></div>
</div>
<div class="card" style="--card-color:var(--brand-color-2)" v-click>
<div class="card-header">Ориентированные на события</div>
<div class="card-body">

- события и потоки данных
- трансформация, фильтрация, <br/>буферизация событий и т.п.

</div>
<div class="card-footer flex justify-around text-xl"><span><logos-reactivex/> Rx.js</span></div>
</div>
<div class="card" style="--card-color:var(--brand-color-3)" v-click>
<div class="card-header">Гибрид первых двух</div>
<div class="card-body">

- подробный граф из событий, <br/>данных и действий с ними

</div>
<div class="card-footer flex justify-around text-xl"><span><logos-effector/> Effector</span></div>
</div>
<div class="card" style="--card-color:var(--brand-color-6)" v-click>
<div class="card-header">Основанные на перевычислении</div>
<div class="card-body">

- rerender частей приложения
- reconcilliation результатов

</div>
<div class="card-footer flex justify-around text-xl"><span><logos-react/> React</span><span><logos-preact/> Preact</span></div>
</div>
</div>

<!--
А если пуститься в детали, то можно выделить, например,

1. реактивность, которая строится вокруг данных и построения графа зависимостей между ними. И я лично для себя реактивность представляю именно так. Примером реализации такой реактивности может служить сигнальная реактивность: библиотека MobX, современный Vue, Solid js.

2. Бывает другое популярное представление о реактивности - это потоки данных и других произвольных событий. В этом случае тоже выстраивается граф. Но не узлов, в которых хранятся данные. А узлами являются обработчики протекающих по ним данных. Пример библиотеки, которая здесь сразу вспоминается, это Rx.js. Для меня это уже немного не то, что я бы называл реактивностью. И в докладе мы такой тип реактивности рассматривать не будем.

3. Где-то посередине между этими двумя типами можно расположить Effector, в котором формируется подробный граф, где узлами являются и хранилища данных, и события, и действия по их обработке.

4. И вот сейчас может быть неожиданно. React тоже реактивен. Хотя когда-то говорили, что React не реактивен, хоть и называется React-ом. Он по своему реактивен, как мы далее увидим, когда поговорим про "гранулярность" реактивности.
-->
---
level: 3
---

<style>
  .slidev-code-wrapper {
    --slidev-code-font-size: 20px;
    --slidev-code-line-height: 1.5em;
  }
</style>

# Как я представляю реактивность?

<div class="grid grid-cols-2 gap-4">
<div>

````md magic-move {at:3}
```ts{all|1}
let U = 5

let R = 1

const I = U / R  // --> 5

const P = I * U  // --> 25
```
```ts{1|5-7}
let U = 4

let R = 1

const I = U / R  // --> ?

const P = I * U  // --> ?
```
```ts{5}
let U = 4

let R = 1

const I = U / R  // --> 4

const P = I * U  // --> ?
```
```ts{7|3}
let U = 4

let R = 1

const I = U / R  // --> 4

const P = I * U  // --> 16
```
```ts
let U = 4

let R = 0.5

const I = U / R  // --> 8

const P = I * U  // --> 32
```
```ts
let U = 1.5

let R = 2

const I = U / R  // --> 0.75

const P = I * U  // --> 1.125
```
````

</div>
<div style="position:relative">
  <div class="fill-container" v-click="[1,2]">
    <img src="./images/excel.png" style="width: 100%" />
  </div>
  <div class="text-center fill-container" v-click="[2,4]">
    <img src="./drawio/urip.drawio.svg" style="width: 60%;margin:0 auto" />
  </div>
  <div class="text-center fill-container" v-click="[4,6]">
    <img src="./drawio/urip_1.drawio.svg" style="width: 60%;margin:0 auto" />
  </div>
  <div class="text-center fill-container" v-click="[6,7]">
    <img src="./drawio/urip_2.drawio.svg" style="width: 60%;margin:0 auto" />
  </div>
  <div class="text-center fill-container" v-click="[7,9]">
    <img src="./drawio/urip_3.drawio.svg" style="width: 60%;margin:0 auto" />
  </div>
  <div class="text-center fill-container" v-click="[9,10]">
    <img src="./drawio/urip_4.drawio.svg" style="width: 60%;margin:0 auto" />
  </div>
  <div class="text-center fill-container" v-click="10">
    <img src="./drawio/urip_5.drawio.svg" style="width: 60%;margin:0 auto" />
  </div>
</div>
</div>

<!--
Так вот. Что я себе всегда представлял с самого начала под реактивностью? Как я уже сказал, для меня реактивность больше строится вокруг данных. А взаимосвязи между данными описываются выражениями формулами. Здесь я их псевдокодом написал в синтаксисе JavaScript.

1. Поведение напоминает Excel-таблички. И именно Excel обычно приводят в пример, когда пытаются объяснить реактивность. Для каждого вычисляемого значения можно из выражения формулы определить, от каких значений оно зависит.

2. Если составить граф из этих значений, то это должен быть ориентированный ациклический граф.

3. При изменении исходных данных должны пересчитаться все зависимые от них данные, и затем зависимые зависимых. Вся эта последовательность вычислений должна произойти за один проход таким образом, чтобы потребитель конечных данных не увидел их в состоянии промежуточных вычислений. И если мы одновременно изменим несколько значений исходных данных, то мы не хотим несолько раз перевычислять весь граф - все зависимые узлы должны пересчитаться один раз.

-->
---
level: 3
---

<DeclarativeCode text="Псевдокод">

```tsx{all|2-5|8-17|9,12,15,16|10,13|all}
const OhmsLaw = () => {
  let voltage = 1.5   // U
  let resistance = 2  // R

  const amperage = voltage / resistance  // I

  return (
    <div>
      <p>Напряжение: <input type="number" value={voltage} onInput={e => {
        voltage = e.target.valueAsNumber
      }}/></p>
      <p>Сопротивление: <input type="number" value={resistance} onInput={e => {
        resistance = e.target.valueAsNumber
      }}/></p>
      <p>Сила тока: <span>{amperage}</span> А</p>
      <p>Мощность: <span>{amperage * voltage}</span> Вт</p>
    </div>
  )
}
```

</DeclarativeCode>

<!--
И я бы ожидал от UI-фреймворка примерно такого же. Здесь пример псевдокода, как бы это могло выглядеть в синтаксисе JSX.

1. Здесь те же выражения, что и на прошлом примере, просто переименованные под стиль именования.

2. UI описывается простой структурой дерева элементов

3. с привязкой реактивных данных в нужные места. Для примера я выражение для мощности написал прямо inline в шаблоне.

4. События вызывают изменения исходных данных - просто синтаксисом присваивания.

5. А в ответ на изменения происходил бы не ререндер целого компонента, а точечно изменялось бы в UI ровно то, что нужно, и промежуточные вычисления выполнялись бы минимальные.

Иными словами, хочется, чтобы код был лаконичный и понятный, как обычный JavaScript, но выполнялся бы с семантикой реактивности, описывая граф потоков данных.
-->
---
level: 3
---

<img src="./drawio/data_flow_graph.drawio.svg" style="margin: 0 auto; width:60%" />

---
level: 2
---

# Реактивность в JavaScript

<div class="grid grid-cols-2 gap-4">
<div class="card" style="--card-color:var(--brand-color-6)" v-click>
<div class="card-header">Run-time</div>
<div class="card-body">

- Библиотеки реактивности
- Интеграция с фреймворками

</div>
<div class="card-footer flex justify-around"><span><logos-mobx/> MobX</span><span><logos-reactivex/> Rx.js</span><span><logos-vue/> Vue</span><span><logos-solidjs-icon/> Solid</span></div>
</div>
<div class="card" style="--card-color:var(--brand-color-5)" v-click>
<div class="card-header">Build-time</div>
<div class="card-body">

- Расширение языка, трансформации кода
- +1 шаг сборки

</div>
<div class="card-footer flex justify-around"><span><logos-svelte-icon/> Svelte</span><span><img src="./images/ripple.png" style="display:inline;height:1lh" /> Ripple</span><span><logos-marko-icon/> Marko</span></div>

</div>
</div>

<!--
Это был псевдокод. Какие есть средства добавить реактивность в JavaScript?

1. Это либо решения в runtime: специальные библиотеки реактивности с интеграцией прямо во фреймворк

2. Либо дополнительный шаг сборки, чтобы както  модифицировать язык, или даже придумать новый язык с семантикой реактивности, компилирующийся в JavaScript.
-->

---
level: 2
background: images/coffee.jpg
---

<style>
  .card {
    background-color: rgb(from var(--slidev-slide-content-background) r g b / 40%);
  }
</style>

# "Гранулярность" реактивности

<div style="position:relative;height: 230px">
  <div class="fill-container" v-click.hide="1">
    <img src="./images/grind_sizes.png" style="width:90%;margin:0 auto" />
  </div>
  <div class="fill-container text-center grid grid-cols-4 gap-2" v-click="1">
    <div class="card">
      <div class="card-header">Пересчитать всё</div>
    </div>
    <div class="card">
      <div class="card-header">"Coarse-grained reactivity"</div>
      <div class="card-body">
        <div class="flex justify-around text-3xl">
          <logos-react/> <logos-preact/>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">"Fine-grained reactivity"</div>
      <div class="card-body">
        <div class="flex justify-around text-3xl">
          <logos-vue/> <logos-svelte-icon/> <logos-solidjs-icon/> <logos-mobx/>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Пересчитать инкрементально</div>
      <div class="card-body">
        <span class="text-2xl" v-click="2"><b>"Можно, <br/>а зачем?"</b></span>
      </div>
    </div>
  </div>
</div>

<v-drag-arrow v-click="1" pos="72,375,834,0" style="color:var(--brand-color-1)"/>

<!--
Разбирая модель выполнения реактивного кода для любого решения (не важно, библиотека это или языковое расширение), стоит обратить внимание на такую характеристику как гранулярность реактивности. Этот неформальный термин был придуман некоторыми реализациями реактивности, чтобы подчеркнуть их эффективность по сравнению с другими.

Под гранулярностью понимается, насколько мелкие блоки из действий по пересчёту производных данных могут выполняться атомарно и независимо. Цель дробления операций на мелкие кусочки была в том, чтобы без толку не выполнять лишние вычисления, приводящие к тем же самым результатам.

Ведь можно по любому изменению исходных данных пересчитывать вообще всё. Это дорого, хотя где-то такой подход выигрывает. В видео-играх, например, при отрисовке каждого кадра.

Бывают реализации, допускающие некоторые лишние действия, потому что исходная причина реакции не влияет на их результат. А всё потому, что реакции организованы в довольно большие группы действий - крупные гранулы - и мы вынуждены выполнять их целиком. Отсюда и название "coarse-graned reactivity".

Есть более умные реализации, старающиеся минимизировать лишние действия. Для этого все действия реакций разбиваются на более мелкие операции, как мелкие гранулы, поэтому распространился термин "fine-graned reactivity".

В идеале, конечно, хотелось бы избежать лишних действий вообще, выполнить ровно то, что нужно для обновления производных данных, инкрементально. Но такой подход имеет свою цену. При экономии на лишних действиях мы много потеряем на организацию точности всего этого процесса.
-->

---
level: 3
---

# "Fine-grained reactivity": Сигналы (API)

```ts
type Signal<T> = {
  get: () => T
  set: (value: T) => void
}

type Computed<T> = {
  get: () => T
}

const signal = <T>(initValue: T): Signal<T> => { /* ... */ }
const computed = <T>(func: () => T): Computed<T> => { /* ... */ }
```

---
level: 3
---

# "Fine-grained reactivity": Сигналы

```ts{all|1-2|4-5|7-8|10|12-13}
const voltage = signal(5)
const resistance = signal(1)

const amperage = computed(() => voltage.get() / resistance.get())
const power = computed(() => amperage.get() * voltage.get())

console.log("amperage", amperage.get())  // --> 5
console.log("power", power.get())  // --> 25

voltage.set(4)

console.log("amperage", amperage.get())  // --> 4
console.log("power", power.get())  // --> 16
```

<!--
Одной из самых удачных библиотечных реализаций реализаций, набравшей популярность и принятной многими фреймворками, является так называемая сигнальная реактивность. Данные делятся на изменяемые первичные данные (которые здесь создаются в условном API функцией signal) и производные данные (computed), которые вычисляются выражением на основе первичных данных. Производные данные зависят от других первичных и произвоных данных. Поэтому все узлы данных объединяются в направленный ациклический граф, связывающий из отношением зависимости. Сигнал напоминает паттерн Observable. Но вместо того, чтобы сразу вызывать коллбэк по изменению данных, сначала происходит распространение уведомления тем узлам, которые необходимо пересчитать, а сами вычисления выполняются в правильном порядке в отдельной фазе, чтобы каждый computed вычислялся только с актуальными версиями своих зависимостей.
-->
---
level: 3
---

# Сигналы: Потеря реактивности

````md magic-move
```ts
const amperage = signal(2)
const resistance = signal(1)

const power = computed(() => amperage.get() * amperage.get() * resistance.get())
```
```ts{4-6}
const amperage = signal(2)
const resistance = signal(1)

const voltage = amperage.get() * resistance.get()  // --> 2

const power = computed(() => amperage.get() * voltage)  // --> 4
```
```ts{8-10}
const amperage = signal(2)
const resistance = signal(1)

const voltage = amperage.get() * resistance.get()  // --> 2

const power = computed(() => amperage.get() * voltage)  // --> 4

resistance.set(2)

console.log(power.get())  // 4
```
```ts{4|10}
const amperage = signal(2)
const resistance = signal(1)

const voltage = computed(() => amperage.get() * resistance.get())  // --> 2

const power = computed(() => amperage.get() * voltage.get())  // --> 4

resistance.set(2)

console.log(power.get())  // 8
```
````
---
level: 3
---

# Сигналы: Proxy-объекты

````md magic-move
```ts{all|1|4|5-8}
const reactive = <T extends Record<string, unknown>>(o: T): T => {
  const res = {} as Record<string, unknown>
  for (const [key, value] of Object.entries(o)) {
    const s = signal<unknown>(value)
    Object.defineProperty(res, key, {
      get(): unknown { return s.get() }
      set(newValue: unknown) { s.set(newValue) }
    })
  }
  return res as T
}
```
```ts{all|1|5|9-11}
const obj = reactive({ a: 42, b: true, c: "The Answer" })

const foo = computed(() => {
  // ...
  obj.a /* ... */  obj.b /* ... */ obj.c
  // ...
})

obj.a = 100500
obj.b = false
obj.c = "Whatever"
```
````

---
level: 3
---

# Сигналы: деструктуризация

````md magic-move
```ts{all|1|2-3|5|7-8|10|12-13|5}
const foo = reactive({ name: "Resistance", value: 5 })
const bar = computed(() => `${foo.name} equals to ${foo.value}`)
console.log(bar.get())  // "Resistance equals to 5"

const { name, value } = foo

const baz = computed(() => `${name} equals to ${value}`)
console.log(baz.get())  // "Resistance equals to 5"

foo.value = 2

console.log(bar.get())  // "Resistance equals to 2"
console.log(baz.get())  // "Resistance equals to 5"
```
```ts{5-6}
const foo = reactive({ name: "Resistance", value: 5 })
const bar = computed(() => `${foo.name} equals to ${foo.value}`)
console.log(bar.get())  // "Resistance equals to 5"

const name = foo.name
const value = foo.value

const baz = computed(() => `${name} is ${value}`)
console.log(baz.get())  // "Resistance equals to 5"

foo.value = 2

console.log(bar.get())  // "Resistance equals to 2"
console.log(baz.get())  // "Resistance equals to 5"
```
```ts{5-6,8,14}
const foo = reactive({ name: "Resistance", value: 5 })
const bar = computed(() => `${foo.name} equals to ${foo.value}`)
console.log(bar.get())  // "Resistance equals to 5"

const name = computed(() => foo.name)
const value = computed(() => foo.value)

const baz = computed(() => `${name.get()} is ${value.get()}`)
console.log(baz.get())  // "Resistance equals to 5"

foo.value = 2

console.log(bar.get())  // "Resistance equals to 2"
console.log(baz.get())  // "Resistance equals to 2"
```
````
---
level: 3
---

# Реактивность: итоги

<div>

- Реактивность, ориентированная на данные и граф зависимостей
- "Fine-grained reactivity"
- Сигналы - удачная run-time реализация со своими недостатками

</div>

---
level: 2
---

# Компилируемая реактивность?

<v-clicks>

- Преобразования кода и расширение языка
  - для удобства использования API
  - для уменьшения шанса ошибок
  - для оптимизаций
- Использование привычного синтаксиса из JavaScript

</v-clicks>

<!--
И многие фреймворки держатся за идею оставаться в рамках всем знакомого JavaScript. Хотя на самом деле применяют к нему преобразования при сборке.
-->
---
level: 2
---

# Vue.js

```html{all|6,10}
<script setup lang="ts">
interface Props {
  msg?: string
  labels?: string[]
}
const { msg = 'hello', labels = ['one', 'two'] } = defineProps<Props>()

watchEffect(() => { console.log(msg) })

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
```

---
level: 2
---

# Svelte

```html{all|2-5}
<script>
  let { answer = 42 } = $props();
	let count = $state(1);
	let doubled = $derived(count * 2);
	let quadrupled = $derived(doubled * 2);
	function handleClick() { count += 1; }
</script>

<p>The answer is {answer}</p>
<button onclick={handleClick}>Count: {count}</button>
<p>{count} * 2 = {doubled}</p>
<p>{doubled} * 2 = {quadrupled}</p>
```

---
level: 2
---

# Solid.js

```js{all|1-2|8-13}
function MyComponent(props) {
  const finalProps = mergeProps({ defaultName: "Ryan Carniato" }, props);
  const [count, setCount] = createSignal(1);
  const increment = () => setCount(count => count + 1);
  const doubled = createMemo(() => count() * 2);
  const quadrupled = createMemo(() => doubled() * 2);
  return (
    <div>
      <div>Hello {finalProps.defaultName}</div>
      <button type="button" onClick={increment}>Count: {count()}</button>
      <p>{count()} * 2 = {doubled()}</p>
      <p>{doubled()} * 2 = {quadrupled()}</p>
    </div>
  );
}
```
---
level: 3
---

<style>
  .slidev-code-wrapper {
    --slidev-code-font-size: 12px;
    --slidev-code-line-height: 1.1em;
  }
</style>

<h1>React <span v-click>Compiler?</span></h1>

```tsx
const OhmsLaw = () => {
  const [voltage, setVoltage] = useState(1.5)
  const [resistance, setResistance] = useState(2)

  const amperage = voltage / resistance

  return (
    <div>
      <p>Напряжение: <input type="number" value={voltage} onInput={e => {
        setVoltage(e.target.valueAsNumber)
      }}/></p>
      <p>Сопротивление: <input type="number" value={resistance} onInput={e => {
        setResistance(e.target.valueAsNumber)
      }}/></p>
      <p>Сила тока: <span>{amperage}</span> А</p>
      <p>Мощность: <span>{amperage * voltage}</span> Вт</p>
    </div>
  )
}
```

---
level: 3
---

# Компилируемая реактивность: итоги

<div>
<v-clicks>

Фреймворки пытаются преодолеть:
- ограничения JavaScript для реализации реактивности
- неудобства API реализации реактивности

Смешиваются:
- обычный JavaScript
- API runtime-реализации реактивности
- "Магия" преобразований кода

</v-clicks>
</div>

---
level: 1
background: ''
class: bg-image-gradient-right
style: '--slide-background-image: url(images/declaration.jpg)'
---

<br/><br/><br/>

# 📜 Декларативность


---
level: 3
---

# Декларативное программирование

<v-clicks>

- Код описывает ожидаемый результат, а не способ его получения
  - Код описывает структуру UI, потоки данных, логику приложения <br/>в виде **деклараций**, а не последовательности действий
- Domain Specific Language (DSL) вместо универсального JavaScript
- Строгие абстракции:
  - Программист сосредоточен на семантике DSL
  - Детали реализации берёт на себя фреймворк

</v-clicks>


---
level: 3
---

<DeclarativeCode :clicks="[0,1]">

````md magic-move
```tsx
const OhmsLaw = () => {
  let voltage = 1.5   // U
  let resistance = 2  // R

  const amperage = voltage / resistance  // I

  return (
    <div>
      <p>Напряжение: <input type="number" value={voltage} onInput={e => {
        voltage = e.target.valueAsNumber
      }}/></p>
      <p>Сопротивление: <input type="number" value={resistance} onInput={e => {
        resistance = e.target.valueAsNumber
      }}/></p>
      <p>Сила тока: <span>{amperage}</span> А</p>
      <p>Мощность: <span>{amperage * voltage}</span> Вт</p>
    </div>
  )
}
```
```tsx
const OhmsLaw = () => {
  const voltage = signal(1.5)   // U
  const resistance = signal(2)  // R

  const amperage = computed(() => voltage.get() / resistance.get())  // I

  return (
    <div>
      <p>Напряжение: <input type="number" value={voltage} onInput={e => {
        voltage.set(e.target.valueAsNumber)
      }}/></p>
      <p>Сопротивление: <input type="number" value={resistance} onInput={e => {
        resistance.set(e.target.valueAsNumber)
      }}/></p>
      <p>Сила тока: <span>{amperage}</span> А</p>
      <p>Мощность: <span>{computed(() => amperage.get() * voltage.get())}</span> Вт</p>
    </div>
  )
}
```
````

</DeclarativeCode>

---
level: 3
---

<img src="./drawio/data_flow_graph.drawio.svg" style="margin: 0 auto; width:60%" />

---
level: 3
---

# Компиляция DSL в сигналы

<div class="grid grid-cols-2 gap-4">
  <div class="card" style="--card-color:var(--brand-color-4)" v-click>
    <div class="card-header">Преимущества</div>
    <div>
      <ul>
        <li><span v-mark.red="1">Выглядит</span> как TypeScript</li>
        <li>Можно деструктурировать объекты (props)</li>
        <li>Нет boilerplate ".get()", ".set()", "signal()", "computed(() => ...)"</li>
      </ul>
    </div>
  </div>
  <div class="card" style="--card-color:var(--brand-color-3)" v-click>
    <div class="card-header">Недостатки</div>
     <div>
      <ul>
        <li>"Магия" порядка исполнения вычислений</li>
        <li>+1 шаг сборки</li>
        <li>Ограничения синтаксиса и используемых API</li>
      </ul>
    </div>
  </div>
</div>

---
level: 3
---

<DeclarativeCode :clicks="[0,1]">

````md magic-move {at:1}
```ts
let a = 40
let b = 2

const c = a + b
```
```ts
const a = signal(40)
const b = signal(2)

const c = computed(() => a.get() + b.get())
```
````

</DeclarativeCode>
<br/><br/>
<DeclarativeCode :clicks="[0,1]">

````md magic-move {at:1}
```ts
let a = "The Answer"
let b = "Life and Universe and Everything"

const c = `${a} to ${b}`
```
```ts
const a = signal("The Answer")
const b = signal("Life and Universe and Everything")

const c = computed(() => `${a.get()} to ${b.get()}`)
```
````

</DeclarativeCode>

---
level: 3
---

<DeclarativeCode :clicks="[0,3]">

````md magic-move
```ts
let lightswitch = true

let voltage = 5
let resistance1 = 1
let resistance2 = 1

const power = lightswitch ? voltage * voltage / (resistance1 + resistance2) : 0  // --> 12.5
```
```ts{7-10}
const lightswitch = signal(true)

const voltage = signal(5)
const resistance1 = signal(1)
const resistance2 = signal(1)

const power = computed(() =>
  lightswitch.get()
    ? (voltage.get() * voltage.get()) / (resistance1.get() + resistance2.get())
    : 0)
```
```ts{7-12}
const lightswitch = signal(true)

const voltage = signal(5)
const resistance1 = signal(1)
const resistance2 = signal(1)

const _voltageSquare = computed(() => voltage.get() * voltage.get())
const _resistance12 = computed(() => resistance1.get() + resistance2.get())
const power = computed(() =>
  lightswitch.get()
    ? _voltageSquare.get() / _resistance12.get()
    : 0)
```
```ts{7-13}
const lightswitch = signal(true)

const voltage = signal(5)
const resistance1 = signal(1)
const resistance2 = signal(1)

const _voltageSquare = computed(() => voltage.get() * voltage.get())
const _resistance12 = computed(() => resistance1.get() + resistance2.get())
const _power1 = computed(() => _voltageSquare.get() / _resistance12.get())
const power = computed(() => lightswitch.get() ? _power1.get() : 0)
```
````

</DeclarativeCode>
---
level: 3
---

<img src="./drawio/expression_tree.drawio.svg" style="margin:0 auto;width:60%" />

---
level: 3
---

<DeclarativeCode>

````md magic-move
```ts{all|1-12|14-16}
const f = (a: string, b: number) => {
  const c = a.toUppercase()
  const d = g(b * 2, 42)
  const e = g(100500, b * 3)
  return `${c} ${d} ${e}`
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "The Answer"
let b = 42
f(a, b)
```
```ts{1,16}
const f = (a: string, b: number) => {  // a = "The Answer", b = 42
  const c = a.toUppercase()
  const d = g(b * 2, 42)
  const e = g(100500, b * 3)
  return `${c} ${d} ${e}`
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "The Answer"
let b = 42
f(a, b)
```
```ts{2}
const f = (a: string, b: number) => {  // a = "The Answer", b = 42
  const c = a.toUppercase()  // c = "THE ANSWER"
  const d = g(b * 2, 42)
  const e = g(100500, b * 3)
  return `${c} ${d} ${e}`
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "The Answer"
let b = 42
f(a, b)
```
```ts{3-4}
const f = (a: string, b: number) => {  // a = "The Answer", b = 42
  const c = a.toUppercase()  // c = "THE ANSWER"
  const d = g(b * 2, 42)  // g(84, 42) = ?
  const e = g(100500, b * 3)  // g(100500, 126) = ?
  return `${c} ${d} ${e}`
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "The Answer"
let b = 42
f(a, b)
```
```ts{3,8-12}
const f = (a: string, b: number) => {  // a = "The Answer", b = 42
  const c = a.toUppercase()  // c = "THE ANSWER"
  const d = g(b * 2, 42)  // g(84, 42) = 7062.480740698408
  const e = g(100500, b * 3)  // g(100500, 126) = ?
  return `${c} ${d} ${e}`
}

const g = (p: number, q: number) => {  // p = 84, p = 42
  const pp = p * p  // pp = 7056
  const qq = Math.sqrt(q)  // q = 6.48074069840786
  return pp + qq  // 7062.480740698408
}

let a = "The Answer"
let b = 42
f(a, b)
```
```ts{4,8-12}
const f = (a: string, b: number) => {  // a = "The Answer", b = 42
  const c = a.toUppercase()  // c = "THE ANSWER"
  const d = g(b * 2, 42)  // g(84, 42) = 7062.480740698408
  const e = g(100500, b * 3)  // g(100500, 126) = 10100250011.224972
  return `${c} ${d} ${e}`
}

const g = (p: number, q: number) => {  // p = 100500, p = 126
  const pp = p * p  // pp = 10100250000
  const qq = Math.sqrt(q)  // q = 11.224972160321824
  return pp + qq  // 10100250011.224972
}

let a = "The Answer"
let b = 42
f(a, b)
```
```ts{5}
const f = (a: string, b: number) => {  // a = "The Answer", b = 42
  const c = a.toUppercase()  // c = "THE ANSWER"
  const d = g(b * 2, 42)  // g(84, 42) = 7062.480740698408
  const e = g(100500, b * 3)  // g(100500, 126) = 10100250011.224972
  return `${c} ${d} ${e}`  // "THE ANSWER 7062.480740698408 10100250011.224972"
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "The Answer"
let b = 42
f(a, b)
```
```ts{14}
const f = (a: string, b: number) => {  // a = "The Answer", b = 42
  const c = a.toUppercase()  // c = "THE ANSWER"
  const d = g(b * 2, 42)  // g(84, 42) = 7062.480740698408
  const e = g(100500, b * 3)  // g(100500, 126) = 10100250011.224972
  return `${c} ${d} ${e}`  // "THE ANSWER 7062.480740698408 10100250011.224972"
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "Any questions?"
let b = 42
f(a, b)
```
```ts{14,1,2,5}
const f = (a: string, b: number) => {  // a = "Any questions?", b = 42
  const c = a.toUppercase()  // c = "ANY QUESTIONS?"
  const d = g(b * 2, 42)  // g(84, 42) = 7062.480740698408
  const e = g(100500, b * 3)  // g(100500, 126) = 10100250011.224972
  return `${c} ${d} ${e}`  // "ANY QUESTIONS? 7062.480740698408 10100250011.224972"
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "Any questions?"
let b = 42
f(a, b)
```
```ts{15}
const f = (a: string, b: number) => {  // a = "Any questions?", b = 42
  const c = a.toUppercase()  // c = "ANY QUESTIONS?"
  const d = g(b * 2, 42)  // g(84, 42) = 7062.480740698408
  const e = g(100500, b * 3)  // g(100500, 126) = 10100250011.224972
  return `${c} ${d} ${e}`  // "ANY QUESTIONS? 7062.480740698408 10100250011.224972"
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "Any questions?"
let b = 43
f(a, b)
```
```ts{1,3-4,15|3,8,9,11|4,8,10,11}
const f = (a: string, b: number) => {  // a = "Any questions?", b = 43
  const c = a.toUppercase()  // c = "ANY QUESTIONS?"
  const d = g(b * 2, 42)  // g(86, 42) = 7062.480740698408
  const e = g(100500, b * 3)  // g(100500, 129) = 10100250011.224972
  return `${c} ${d} ${e}`  // "ANY QUESTIONS? 7062.480740698408 10100250011.224972"
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "Any questions?"
let b = 43
f(a, b)
```
````

</DeclarativeCode>

---
level: 3
---

<DeclarativeCode :clicks="[0,1]">

````md magic-move
```ts
const f = (a: string, b: number) => {
  const c = a.toUppercase()
  const d = g(b * 2, 42)
  const e = g(100500, b * 3)
  return `${c} ${d} ${e}`
}

const g = (p: number, q: number) => {
  const pp = p * p
  const qq = Math.sqrt(q)
  return pp + qq
}

let a = "Any questions?"
let b = 43
f(a, b)
```
```ts
const f = (a: Computed<string>, b: Computed<number>): Computed<string> => {
  const c = computed(() => a.get().toUppercase())
  const d = g(computed(() => b.get() * 2), 42)
  const e = g(100500, computed(() => b.get() * 3))
  return computed(() => `${c.get()} ${d.get()} ${e.get()}`)
}

const g = (p: Computed<number>, q: Computed<number>): Computed<string> => {
  const pp = computed(() => p.get() * p.get())
  const qq = computed(() => Math.sqrt(q.get()))
  return computed(() => pp.get() + qq.get())
}

const a = signal("The answer")
const b = signal(42)
const result = f(a, b)

console.log(result.get())
a.set("Any questions?")
console.log(result.get())
```
````

</DeclarativeCode>

---
level: 3
---

# Наблюдения

- Инкрементальные вычисления и сигнальная реактивность похожи
- Дерево вызовов функций <==> Дерево графов сигналов
- Порядок вычислений +- одинаковый
- Минимизация "лишних" перевычислений

---
level: 3
---

# Объекты как значения

<DeclarativeCode :clicks="[0,1]">

````md magic-move
```ts
let a = 100500.0
let b = "Whatever"

const c = { foo: a, bar: b }
```
```ts
const a = signal(100500.0)
const b = signal("Whatever")

const c = computed(() => ({ foo: a.get(), bar: b.get() }))
```
```ts{4-6}
const a = signal(100500.0)
const b = signal("Whatever")

const c = computed(() => ({ foo: a.get(), bar: b.get() }))

const d = computed(() => `${c.get().foo} is ${c.get().bar}!`)
```
```ts
const a = signal(100500.0)
const b = signal("Whatever")

const c = { foo: a, bar: b }

const d = computed(() => `${c.foo.get()} is ${c.bar.get()}!`)
```
```ts{6-8}
const a = signal(100500.0)
const b = signal("Whatever")

const c = { foo: a, bar: b }

const { foo, bar } = c

const d = computed(() => `${foo.get()} is ${bar.get()}!`)
```
```ts{10}
const a = signal(100500.0)
const b = signal("Whatever")

const c = { foo: a, bar: b }

const { foo, bar } = c

const d = computed(() => `${foo.get()} is ${bar.get()}!`)

const e = computed(() => JSON.stringify(c))  // ???
```
````

</DeclarativeCode>

---
level: 3
---

# Вложенная реактивность

- Реактивные массивы и их трансформация (map, filter, reduce и т.п.)
- Rendering списков на основе реактивных массивов
- Union-типы, состоящие из объектных типов
- Вложенные объекты и вложенные массивы
- Замена поддерева в реактивном дереве
- Передача ссылки на изменяемые данные (binding)
- Жизненный цикл графов и связей

---
level: 3
layout: image
image: ./images/trees.jpg
class: text-center
---

<br/><br/>

<h1 class="contrast-bg">Древовидные данные</h1>

<div>
<p class="contrast-bg">Отсутствие циклов</p>
<p class="contrast-bg">У каждого узла один родитель</p>
<p class="contrast-bg">В чистых функциях - только "value-types"</p>
</div>

---
level: 1
background: ''
class: bg-image-gradient-right
style: '--slide-background-image: url(images/strict.jpg)'
---

<br/><br/><br/>

# ✅ Строгость

---
level: 2
---

# Ментальная модель UI - основа DSL


<div class="text-center grid grid-cols-2">
<div>

**Дерево компонентов**

<img src="./drawio/components_tree.drawio.svg" style="margin: 0 auto;width:70%" />

</div>
<div>

**Цикл обновления**

<img src="./drawio/update_cycle.drawio.svg" style="margin: 0 auto;width:70%" />
</div>
</div>

---
level: 3
class: text-xl text-center
---

**Большая часть UI укладывается в эту модель**

<br/>
<img src="./images/todomvc.png" style="margin:0 auto;width: 50%" />

<!--
Большая часть UI укладывается в эту модель. В любом типовом UI будут компоненты, цикл обновления представления и потоки данных, описываемые чистыми функциями. В этом и состоит идея фреймворка - упросить нам работу с этой большей частью UI и сделать это наиболее оптимально.

А все нестандартные компоненты, такие как canvas, карты, плееры, или директивы, интеграции и другие специальные возможности, требующие доступа к низкоуровневым API нужно держать в кодовой базе отдельно. Они выступают адаптерами возможностей для фреймворка, своего рода расширениями языка.
-->
---
level: 3
---

# Декларативный TSX

<v-clicks>

- Подмножество TypeScript с семантикой инкрементальных вычислений
- Используется как "язык шаблонов" для UI-компонентов
- Поддерживает простую логику состояния, трансформации и привязки данных
- Сложная логика выносится за пределы языка в обычный TypeScript
- Взаимодействие с обычным TypeScript - через "границу" интеграции

</v-clicks>

---
level: 3
---

<style>
  li {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.2em;
  }
</style>

# Декларативный TSX: ограничения

<div class="flex gap-4">
<div>

- Запрещён "лишний" синтаксис:
  - class, this, new, delete, var, function, циклы for-in, методы, get- и set- методы, операции с прототипами и т.д.
- "Белый список" API:
  - нет прямого доступа к Web APIs
  - import-ить можно другие модули декларативного TSX
- Чистота функций:
  - отсутствие циклов, присваиваний, побочных эффектов
  - Изменения данных - только в специальных контекстах (например, обработчики событий)
- Древовидные данные:
  - Запрет сравнения изменяемых объектов по ссылке
- Специальный API:
  - реактивные массивы
  - snapshot и reconcile вложенных данных

</div>
<div>
  <img src="./images/statham.jpg" style="width: 100%"/>
</div>
</div>

---
level: 3
layout: image
image: images/cocktail.jpg
backgroundSize: contain
---

---
level: 2
---

# Примеры инкрементальных вычислений

<v-clicks>

- <logos-marko-icon /> Marko
- "Реактивный CSS" - CSS Variables, пользовательские функции и properties
- Compose - компиляторный плагин для Kotlin, `@Composable`-функции
- QML - декларативный язык разметки UI в Qt

</v-clicks>

---
level: 1
layout: center
---

# Заключение

---
level: 1
---

# Заключение

<v-clicks>

- UI-фреймворк - решение, способствующее улучшению DX при разработке UI
- UI-фреймворк создаёт свою абстракцию - ментальная модель UI:
  - Чистая функция с семантикой инкрементального исполнения - "fine-grained reactivity"
  - Декларативный DSL описания связей между данными, преобразований и привязки к представлению
  - Строгие ограничения для поддержания абстракции
- Многие фреймворки приходят к этой концепции:
  - Те же соглашения и ограничения 
  - Разделение "обычного" кода от нестандартного, "прикладного" от "системного"

</v-clicks>

---
level: 2
---

# Спасибо!

<div class="grid grid-cols-2 gap-4 items-center">
  <div>
    <img src="./images/qr-code.svg" style="width: 70%;margin: 0 auto" />

https://github.com/alfertev2014/rwrtw

  </div>
  <div>
    <div class="flex gap-x-2 text-2xl items-center"><img src="./images/vasya.jpg" style="border-radius: 50%" /><div><b>Василий Алфертьев</b></div></div>
    <p><logos-telegram style="display: inline; width: 32px; height: 32px" /> <b>Telegram</b>: <a href="https://t.me/alfertev2012">@alfertev2012</a></p>
    <p><logos-github-icon style="display: inline; width: 32px; height: 32px;background:white;border-radius:50%"/> <b>GitHub</b>: <a href="https://github.com/alfertev2014">@alfertev2014</a></p>
  </div>
</div>
