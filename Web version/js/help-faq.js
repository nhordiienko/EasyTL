class HelpFAQ {
	faq = [
		{
			topic: "Как начать проходить тесты?",
			answer: "Нажать кнопку старт, прочитать теорию и начать проходить тест по пункту теории.<br><br>Также вы можете пройти тест из 20 случайных вопросов нажав на кнопку \"Быстрый тест\"."
		},
		{
			topic: "Зачем нужна регистрация?",
			answer: "Регистрация нужна для статистики, то есть для  сохранения результатов теста.<br><br>Вы также сможете поделиться своими результатами с друзьями."
		},
		{
			topic: "Как сохранить свой результат?",
			answer: "Результат сохраняется автоматически, если вы авторизовались."
		},
		{
			topic: "Как поделиться результатом?",
			answer: "Нажимаете на кнопку \"Поделиться\" в профиле и выбираете нужную вам соцсеть."
		},
		{
			topic: "Как мне получить звёзды?",
			answer: "За прохождения теста, соответствующего пункту теории без ошибок, вы получите одну звезду. <br><br>Звезды нельзя купить, только заработать. "
		},
		{
			topic: "От куда берутся вопросы для теста?",
			answer: "Вопросы соответствуют официальным вопросам теста в ГАИ."
		},
		{
			topic: "Вопросы для какой категории вождения?",
			answer: "Вопросы для категории B."
		},
		{
			topic: "Можно ли этот тест как подтверждение категории?",
			answer: "Этот тест нельзя использовать как подтверждение категории."
		}
	]
	constructor(identifierTopic, identifierAnswer) {
		for (let i = 0; i < this.faq.length; i++) {
			if (i != 0) {
				$(identifierTopic).append(this.GetP(this.faq[i].topic));
				$(identifierAnswer).append(this.GetP(this.faq[i].answer));
			}
			else {
				$(identifierTopic).append(this.GetP(this.faq[i].topic, true));
				$(identifierAnswer).append(this.GetP(this.faq[i].answer, true));
			}
		}
	}
	GetP(context, c) {
		if (c) {
			return "<p class=\"active\">" + context + "</p>";
		}
		return "<p>" + context + "</p>";
	}
}