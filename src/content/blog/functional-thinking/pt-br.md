---
title: "Pensamento Funcional na prática"
summary: "Imutabilidade, Funções Puras, Side Effects, High Order Functions e tudo que você precisa para entender o que é realmente pensar de maneira funcional"
date: "Apr 16 2025"
draft: false
tags:
  - Programação Funcional
  - Paradigma de Programação
  - Programação
lang: "pt-br"
---

![Capa](https://i.imgur.com/pWBu0iB.png)

Desde que comecei a trabalhar no Nubank, fiquei revisando PRs em Clojure sem ter um modelo mental do que estava lendo. As funções eram pequenas, nada mutava e não havia loops — mesmo assim o código era expressivo e claro. Esse desconforto me trouxe até aqui.

- [Introdução](#introdução)
- [Afinal, O que é Pensamento Funcional?](#afinal-o-que-é-pensamento-funcional)
- [Imutabilidade](#imutabilidade)
  - [Então como incrementamos uma variável?](#então-como-incrementamos-uma-variável)
  - [Por que imutabilidade importa?](#por-que-imutabilidade-importa)
- [Funções Puras (Pure Functions)](#funções-puras-pure-functions)
  - [O que são efeitos colaterais (Side Effects)?](#o-que-são-efeitos-colaterais-side-effects)
    - [Efeitos colaterais comuns](#efeitos-colaterais-comuns)
  - [Por que funções puras importam?](#por-que-funções-puras-importam)
- [Funções de Primeira Classe (High Order Functions)](#funções-de-primeira-classe-high-order-functions)
  - [Closure](#closure)
  - [Currying](#currying)
  - [Bonus: Lambdas](#bonus-lambdas)
  - [Por que Funções de Primeira Classe importam?](#por-que-funções-de-primeira-classe-importam)
- [Transformando dados](#transformando-dados)
- [Declaratividade](#declaratividade)
  - [Misturando ideias x Clareza](#misturando-ideias-x-clareza)
  - [Por que Declaratividade importa?](#por-que-declaratividade-importa)
- [Conclusão](#conclusão)
- [Referências](#referências)

## Introdução

Desde que eu comecei a trabalhar no `Nubank` tenho percebido que a minha maneira de pensar na programação tem mudado de alguma maneira, na verdade, tudo que eu aprendi até hoje na programação com a faculdade e outras experiências de trabalho sempre foram o tradicional, isto é, sempre fui ensinado a ter o `pensamento imperativo` que é basicamente o pensamento onde você descreve os passos detalhados para resolver seu problema.

Claro que tive o prazer e a oportunidade de ter a disciplina de `Programação Funcional` na Universidade onde aprendi diversos princípios do paradigma funcional, e bom, é isso que eu quero trazer para discutir aqui hoje.

## Afinal, O que é Pensamento Funcional?

O pensamento funcional em poucas palavras é quando passamos a pensar em criar `funções`, `transformar dados` e focar em responder mais `o quê` do que `o como` ao resolver nossos problemas usando programação.

Na verdade, este pensamento é bem familiar para você mas talvez você não saiba. Lembra das funções na matemática? Como `f(x) = y`? E das <a href="https://www.todamateria.com.br/funcao-bijetora/" target="_blank">`funções bijetoras`</a>, onde para cada `x` único existe um `y` único correspondente? Pois bem, esse raciocínio é a base das `funções puras` na programação funcional.

Claro, não quero transformar esse texto em uma aula de matemática, mas é bom saber que muita da elegância do paradigma funcional vem exatamente dessa raiz lógica. Então agora que você já entendeu a essência, vamos direto aos principais pilares que sustentam essa forma de programar.

**⚠️ Aviso:** Neste artigo estarei utilizando **Python** para dar os exemplos de código por ser uma linguagem mais acessível para quem está começando 

## Imutabilidade

> Dados não são modificados após a sua criação.

A **imutabilidade**, como o próprio nome indica, é o princípio de que algo **não pode ser modificado** depois de criado. Se você aprendeu a programar em linguagens imperativas, deve ter se acostumado com operações como esta:

```python
x = x + 1
```

Esse código parece inofensivo, mas sob a ótica funcional (ou até mesmo matemática), ele levanta uma questão curiosa:

1. Se `x = x + 1`, então... o que é `x`? **R:** `x` é `x + 1`
2. Entramos mais a dentro porque ainda há incógnitas (variáveis)
3. Temos `x + 1`, mas o que é `x`? **R:** E então retornamos ao passo 1.

Percebe onde isso vai chegar? Um loop infinito, e isso revela um fato: **não existe atribuição mutável em matemática pura**. Em linguagens funcionais, o mesmo princípio se aplica. Por isso, **não usamos loops com variáveis que mudam de estado**, porque o **estado não muda**.

### Então como incrementamos uma variável?

Simples: **criando um novo valor** em vez de alterar o anterior.

Considere o seguinte código:

```python
x = 1

def incrementa_um(x):
  return x + 1

y = incrementa_um(x)
```

Nesse exemplo, `x` continua valendo `1`. O que mudou foi que criamos uma nova variável `y`, que representa o valor de `x + 1`. **Não houve mutação**, **houve transformação**.

Esse é o coração da imutabilidade: **ao invés de mudar as coisas, você cria novas versões delas**.

### Por que imutabilidade importa?

Porque **imutabilidade reduz bugs** causados por estados imprevisíveis, facilita o **paralelismo**, e deixa seu código muito mais **confiável e testável**.

## Funções Puras (Pure Functions)

> Uma função que, dada a mesma entrada, sempre retorna a mesma saída e não causa efeitos colaterais.

Esse aqui você pegou spoiler no começo da leitura mas é simples assim: se você consegue prever o resultado apenas olhando para os parâmetros da função, ela é **pura**.

Mas... e a tal segunda parte da definição?

### O que são efeitos colaterais (Side Effects)?

Um **efeito colateral** acontece quando a função **faz algo além de apenas devolver um valor**, ela faz algo que afeta (ou depende de) o mundo externo.

Vamos supor o seguinte código:

```python
def valida_cpf(cpf):
  cpf_valido = consulta_api_externa(cpf)
  return cpf_valido
```

À primeira vista, parece normal. Mas você concorda que o trecho `consulta_api_externa(cpf)` acessa um sistema externo, certo? E se a API estiver fora do ar? Ou se retornar um erro inesperado?

Essa instabilidade externa significa que **a mesma entrada pode produzir resultados diferentes**. Isso quebra a previsibilidade. Ou seja: **essa não é uma função pura**.

#### Efeitos colaterais comuns

Vou te dar mais exemplos, `Efeitos colaterais` ocorrem também aparecem quando vamos:

- 📤 Escrever na tela (`print`)
- 📥 Ler inputs do usuário
- 📁 Ler ou escrever arquivos
- 🌐 Consultar APIs ou bancos de dados
- 🧠 Modificar estados (variáveis, objetos, etc)
- ⚠️ Lançar ou tratar exceções

Mas aqui você pode pensar: _"Mas nossa, mas ai eu não consigo fazer nada com programação funcional né, tudo é efeito colateral"_, errado! a ideia da programação funcional **não é eliminar os efeitos colaterais**, mas sim **isolá-los**.

Você escreve a maior parte do seu sistema com **funções puras, pequenas e testáveis**, e **centraliza os efeitos colaterais em pontos bem definidos**, geralmente em uma camada externa da aplicação, como o controller ou a borda do sistema.

### Por que funções puras importam?

Além dos [beneficios da imutabilidade](#imutabilidade), funções puras tornam o código **previsível** e **fácil de entender e compor**

## Funções de Primeira Classe (High Order Functions)

> Uma função pode ser atribuída a uma variável, passada como argumento ou retornada de outra função.

Esse conceito está presente em muitas linguagens e, se você já usou funções como `map`, `filter` ou `reduce`, você já usou funções de primeira classe na prática, posso falar destas funções em outro momento mas hoje quero te apresentar duas técnicas poderosas que tornam essas funções possiveis: **Closure** e **Currying**.

### Closure

> Uma função que "lembra" o escopo em que foi criada, mesmo após esse escopo já ter sido executado.

```python
def saudacao(nome):
    mensagem = f"Olá, {nome}!"

    def exibe():
        print(mensagem)

    return exibe

boa_tarde = saudacao("Ryan")
boa_tarde()  # Olá, Ryan!
```

Repara só: a função `exibe()` lembra da variável `mensagem`, mesmo depois da função `saudacao()` já ter sido executada. Isso acontece porque `mensagem` foi “fechada” (em inglês: **closed over**) dentro do escopo interno da `exibe()`.

Isso é closure. E com isso, podemos **criar funções configuráveis, encapsular lógica**, e até simular escopos privados.

### Currying

> Currying é o ato de transformar uma função que recebe vários argumentos em uma cadeia de chamadas que recebe um argumento por vez.

Agora que entendemos o que é **closure**, o `currying` faz total sentido.

Olha só esse exemplo em Python:

```python
def multiplica(a):
    def aplicar(b):
        return a * b
    return aplicar

dobro = multiplica(2)
print(dobro(5))  # 10
print(dobro(7))  # 14
```

Aqui, `multiplica(2)` retorna uma nova função que "lembra" o `a = 2` e espera o próximo argumento. Isso é útil demais quando você quer **reutilizar comportamentos pré-configurados** ou fazer composição de forma fluida.

**💡 Observação:** Em linguagens funcionais como **Clojure**, **Haskell** ou **Elm**, o suporte a currying já vem praticamente pronto.

Por exemplo, no Clojure temos a função `partial`, que faz exatamente isso de forma elegante:

```clojure
(def multiplica
  (fn [a b] (* a b)))

(def dobro
  (partial multiplica 2))

(dobro 5) ;; 10
```

Ou seja, as linguagens funcionais **abraçam** esse padrão, porque ele promove reutilização e composição.

### Bonus: Lambdas

Lambdas são funções que podem ser chamadas e definidas sem necessariamente ter um nome. na prática, os exemplos a cima poderiam e seriam escritos assim:

```python
def multiplica(a):
    return lambda b: a * b
```

Quero passar bem rápido neste tema porque ele é apenas uma variação de sintaxe das linguagens e cada uma faz de uma maneira diferente, se você já usou `javascript` deve estar super acostumado com isso aqui:

```javascript
const multiplica = (a, b) => a * b
const dobro = (b) => multiplica(2, b)
const triplo = (b) => multiplica(3, b)
//etc...
```

Em python que é a linguagem que escolhi para os exemplos deste artigo, fazemos da maneira que vimos a cima.

### Por que Funções de Primeira Classe importam?

Talvez você esteja se perguntando agora:

> Então funções de primeira classe é só aplicar currying e closure?

Não exatamente. **Currying** e **closure** são técnicas que só funcionam porque as funções são tratadas como valores e, é isso que o conceito de **funções de primeira classe** representa.

---

Em linguagens que adotam esse modelo, funções:

- Podem ser **atribuídas a variáveis**

- Podem ser **passadas como argumento**

- Podem ser **retornadas de outras funções**

Esse comportamento abre espaço para estruturas mais reutilizáveis, como `map`, `filter`, `reduce`, funções compostas e outras abstrações úteis que vimos até aqui.

---

**O que isso muda na prática?**

Funções de primeira classe tornam o código:

- Mais modular: porque funções podem ser combinadas e reutilizadas

- Mais declarativo: porque podemos expressar **o que queremos fazer**, em vez de como fazer

- Mais simples de testar: já que passamos lógica como valores, sem depender de contexto externo

Essas características contribuem para a clareza e organização do código, especialmente quando trabalhamos com dados transformados.

## Transformando dados

Como você já deve ter percebido até aqui, trabalhar de maneira funcional envolve:

1. Não mudar o estado
2. Não causar efeitos colaterais
3. Compor funções

E isso nos leva a uma ideia central:

> Tudo na programação funcional gira em torno de transformar dados

Essa ideia se concretiza quando usamos funções como `map`, `filter` e `reduce`.

Imagine que você tem uma lista de nomes e quer deixá-los todos em maiúsculo. Em vez de pensar em como fazer isso com um loop, basta declarar o que você quer:

```python
nomes = ["Ana", "Bruno", "Carla"]
nomes_maiusculos = list(map(str.upper, nomes)) # ['ANA', 'BRUNO', 'CARLA']
```

Isso é elegante e direto e o melhor de tudo, sem alterar o estado original nem escrever loops.

Essa composição de funções pequenas e reutilizáveis é o coração da transformação funcional.

> **Obs:** Para os mais experientes de Python de plantão, o uso de `map` e `filter` não é tão comum assim e muitas vezes é substituído por `list comprehensions`, mas o conceito de transformação de dados ainda se aplica. O importante aqui é entender a ideia de **composição** e **transformação**.

## Declaratividade

Aqui é a parte que eu disse sobre focar mais `no quê` do que `no como` da programação funcional. É muito comum que em linguagens de cunho não funcional, você acabe pensando mais em "como percorrer uma lista" ou "como ordenar um array". Já no paradigma funcional, a ideia é descrever a **intenção**, e não os passo.

Vamos ver isso em um exemplo prático:

```python
# Imperativo
even_doubles = []
for n in range(10):
    if n % 2 == 0:
        even_doubles.append(n * 2)

# Funcional / declarativo
pares = filter(lambda x: x % 2 == 0, range(10))
even_doubles = list(map(lambda x: x * 2, pares)) # [0, 4, 8, 12, 16]
```

A versão imperativa descreve **como** fazer cada passo. A funcional, o que você quer: "quero os números pares dobrados".

### Misturando ideias x Clareza

Talvez você tenha notado que a versão iterativa acaba misturando ideias, e de certa forma, o pensamento imperativo incentiva isso por eficiência: você filtra, transforma e acumula tudo no mesmo loop.

Mas no funcional isso não acontece, cada operação é **isolada** e **clara**. Isso ajuda a ler, testar e manter o código.

### Por que Declaratividade importa?

Declaratividade importa porque no final do dia, estamos **escrevendo código que vai ser lido e mantido por outros engenheiros** (ou por nós mesmos no futuro).

A declaratividade é importante porque de certo modo, ela nos **incentiva a pensar em abstrações** e em como podemos **expressar o que queremos**, em outras palavras começamos a pensar em blocos que se encaixam, uma função _transforma algo_, outra _filtra_, outra _reduz_ e você compõe como se fosse blocos de LEGO.

Declarar seu código o deixa **legível**, **testável** e **reutilizável** e principalmente: **mais próximo da sua intenção original.**

## Conclusão

Bom, esse foi um resumo do que eu entendo por **pensamento funcional** e como ele pode ser aplicado na prática.

Acredito que Pensar funcionalmente é mais do que conhecer `map` ou `reduce`, **é mudar a forma como você modela problemas**.

O que mudou no meu dia a dia? Chego ao `map`/`filter` antes do loop. Pergunto "essa função tem efeitos colaterais?" como reflexo. Escrevo funções muito menores. E finalmente consigo ler um PR em Clojure sem me sentir perdido.

## Referências

- [Functional Thinking - Ada beat](https://adabeat.com/fp/functional-thinking/)
- [Paradigma Funciona Vs OO: Será que exige uma mudança de pensamento drástica mesmo?](https://www.youtube.com/watch?v=pz5DROXzBlQ&t=1049s&ab_channel=DevEficiente)

---

Espero que tenha gostado do artigo e que ele tenha feito você refletir ao menos um pouquinho. Se tiver alguma dúvida ou sugestão, deixe um comentário abaixo ou entre em contato comigo pelo [LinkedIn](https://www.linkedin.com/in/ryan25/).
