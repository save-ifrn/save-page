import Head from "next/head";
import Image from "next/image";

import { PrivacyPolicySection } from "../components/PrivacyPolicySection";

import saveLogo from "../../public/save-logo.svg";

export default function Privacy() {
	return (
		<div className="bg-[#121214] min-h-screen h-full min-w-screen flex flex-col">
			<Head>
				<title>Política de privacidade</title>
			</Head>

			<div className="flex-1 flex flex-col gap-16 sm:gap-24">
				<header className="w-full pt-6 sm:pt-16 grid place-items-center">
					<Image
						src={saveLogo}
						width={200}
						height={96}
						alt="Logo do Save"
					/>
				</header>

				<article className="text-[#f7f7f7] flex-1 flex flex-col gap-12 px-6 pb-6 md:px-16 md:pb-16">
					<h1 className="font-bold text-2xl sm:text-3xl text-left">
						Política de privacidade
					</h1>

					<div className="flex-1 flex flex-col gap-16">
						<PrivacyPolicySection
							index={1}
							title="Informações gerais"
						>
							<p>
								A presente Política de Privacidade contém
								informações sobre coleta, uso, armazenamento,
								tratamento e proteção dos dados pessoais dos
								usuários do aplicativo e site SAVE - Sistema de
								Assistência Virtual Estudantil. Ela tem como
								finalidade demonstrar absoluta transparência
								quanto ao assunto e esclarecer a todos
								interessados sobre os tipos de dados que são
								coletados, os motivos da coleta e a forma como
								os usuários podem gerenciar ou excluir as suas
								informações pessoais.
							</p>
							<p>
								Esta Política de Privacidade aplica-se a todos
								os usuários do aplicativo. O documento poderá
								ser atualizado em decorrência de eventual
								atualização normativa, razão pela qual se
								convida o usuário a consultar periodicamente
								esta seção.
							</p>
						</PrivacyPolicySection>
						<PrivacyPolicySection
							index={2}
							title="Como recolhemos os dados pessoais ?"
						>
							<div>
								<p>
									Os dados pessoais do usuário são recolhidos
									pela plataforma da seguinte forma:
								</p>
								<ul className="pt-6 flex-1 flex flex-col gap-6 list-disc pl-8">
									<li>
										Quando o usuário entra com uma
										conta/perfil na plataforma: os dados de
										identificação do estudante (matrícula,
										nome completo, CPF, data de nascimento,
										e-mail, campus, turma, curso, foto de
										perfil e situação acadêmica) são
										disponibilizados para nós através do
										SUAP - Sistema Unificado de
										Administração Pública.
										<br />
										Ficam cientes, pois, os usuários de que
										a senha fornecida é devidamente
										criptografada e seu perfil na plataforma
										<strong> NÃO </strong>
										estará disponível para demais usuários.
										Sendo assim, os dados coletados só serão
										mostrados para o dono das informações ou
										para informações internas (
										<a
											className="link px-1"
											href="#section7"
										>
											SEÇÃO 7
										</a>
										).
									</li>
									<li>
										Por intermédio de terceiro: a plataforma
										SAVE recebe dados a partir do SUAP -
										Sistema Unificado de Administração
										Pública. Quando um usuário faz login com
										o seu perfil, os dados são
										disponibilizados pelo Sistema, cabe-se
										dizer que a utilização desses dados é
										autorizada previamente pelos usuários
										junto ao terceiro em questão.
									</li>
								</ul>
							</div>
						</PrivacyPolicySection>
						<PrivacyPolicySection
							index={3}
							title="Quais dados pessoais recolhemos ?"
						>
							<div>
								<p>
									Os dados pessoais do usuário e visitante
									recolhidos são os seguintes:
								</p>
								<ul className="pt-6 flex-1 flex flex-col gap-6 list-disc pl-8">
									<li>
										Dados para o acesso e utilização da
										plataforma: matrícula, nome completo,
										tipo de vínculo com a instituição, CPF,
										data de nascimento, e-mail acadêmico,
										e-mail pessoal, foto de perfil do SUAP,
										foto de perfil enviada a partir da
										plataforma, curso, turma, campus,
										situação acadêmica e token de
										autenticação (senha criptografada).
									</li>
								</ul>
							</div>
						</PrivacyPolicySection>
						<PrivacyPolicySection
							index={4}
							title="Para que finalidade usamos os dados ?"
						>
							<div>
								<p>
									Os dados pessoais do usuário e do visitante
									coletados e armazenados pelo SAVE - Sistema
									de Assistência Virtual Estudantil tem por
									finalidade:
								</p>
								<ul className="pt-6 flex-1 flex flex-col gap-6 list-disc pl-8">
									<li>
										Praticidade: criar sistemas e serviços
										para solucionar os problemas mais comuns
										dos usuários em relação a utilização do
										SUAP.
									</li>
									<li>
										Modernidade: vincular as informações
										obtidas a sistemas modernos de
										notificações e lista de tarefas
										modificáveis, gerando um maior
										desenvolvimento acadêmico.
									</li>
									<li>
										Acessibilidade: possibilitar a criação
										de serviços que ajudem e simplifiquem o
										acesso às informações.
									</li>
								</ul>
								<p>
									O tratamento de dados pessoais para
									finalidades não previstas nesta Política de
									Privacidade somente ocorrerá mediante
									comunicação prévia ao usuário, de modo que
									os direitos e obrigações aqui previstos
									permanecem aplicáveis.
								</p>
							</div>
						</PrivacyPolicySection>
						<PrivacyPolicySection
							index={5}
							title="Por quanto tempo os dados ficam armazenados ?"
						>
							<p>
								Os dados pessoais do usuário e visitante são
								armazenados pela plataforma durante o período
								necessário para a prestação do serviço ou o
								cumprimento das finalidades previstas no
								presente documento, conforme o disposto no
								inciso I do artigo 15 da Lei 13.709/18. Os dados
								podem ser removidos ou anonimizados a pedido do
								usuário.
							</p>
						</PrivacyPolicySection>
						<PrivacyPolicySection
							index={6}
							title="Segurança dos dados pessoais armazenados"
						>
							<p>
								A plataforma se compromete a aplicar as medidas
								técnicas e organizativas aptas à proteção dos
								dados pessoais de acessos não autorizados e
								situações de destruição, perda, alteração,
								comunicação ou difusão de tais dados. A
								plataforma não se exime de responsabilidade por
								culpa exclusiva de terceiros, como em caso de
								ataque de hackers ou crackers, ou culpa
								exclusiva do usuário, como no caso em que ele
								mesmo transfere seus dados a terceiros. O site
								compromete-se a comunicar o usuário em situações
								de violação de segurança dos seus dados
								pessoais. Os dados pessoais armazenados são
								tratados com confidencialidade, dentro dos
								limites legais. No entanto, podemos divulgar
								suas informações pessoais caso sejamos obrigados
								pela lei.
							</p>
						</PrivacyPolicySection>
						<PrivacyPolicySection
							index={7}
							title="Compartilhamento dos dados"
						>
							<p>
								O compartilhamento de dados do usuário ocorre
								apenas com os dados referentes a turma e e-mail
								pessoal para a construção de gráficos e
								informações referentes à usabilidade da
								plataforma.
							</p>
							<p>
								Os dados do perfil do usuário
								<strong> NÃO </strong>são compartilhados
								publicamente.
							</p>
							<p>
								Os dados pessoais<strong> NÃO </strong>podem ser
								compartilhados com terceiros.
							</p>
						</PrivacyPolicySection>
						<PrivacyPolicySection index={8} title="Consetimento">
							<p>
								Ao utilizar os serviços e fornecer as
								informações pessoais na plataforma, o usuário
								está consentindo com a presente Política de
								Privacidade. O usuário, ao entrar, manifesta
								conhecer e pode exercitar seus direitos de
								cancelar seu cadastro, acessar e atualizar seus
								dados pessoais e garante a veracidade das
								informações por ele disponibilizadas. O usuário
								tem direito de seu consentimento a qualquer
								tempo, para tanto deve entrar em contato através
								do e-mail{" "}
								<a
									href="mailto:contato.appsave@gmail.com"
									className="link"
								>
									contato.appsave@gmail.com
								</a>
								.
							</p>
						</PrivacyPolicySection>
						<PrivacyPolicySection
							index={9}
							title="Notificações e acesso periódico dos dados"
						>
							<p>
								Ao autorizar as notificações escolares dentro do
								aplicativo, o usuário permite o acesso periódico
								dos seus dados, com o objetivo de buscar
								alterações e notificá-las. Vale ressaltar que a
								verificação dos dados é automática e virtual,
								feita pelo nosso servidor. Logo, estas
								informações não serão disponibilizadas ou
								acessadas por membros de nossa equipe. Após
								autorizado, o usuário tem a possibilidade de
								desativar quando quiser, a desativação poderá
								ser feita dentro do próprio aplicativo na aba
								{` \"Perfil\"`}. Ao desativar, o acesso
								periódico é desativado automaticamente.
							</p>
						</PrivacyPolicySection>
						<PrivacyPolicySection
							index={10}
							title="Notificações e acesso periódico dos dados"
						>
							<p>
								Reservamos o direito de modificar essa Política
								de Privacidade a qualquer momento, então,
								recomendamos revisão frequente pelo usuário ou
								visitante. As alterações e esclarecimentos vão
								surtir efeito imediatamente após sua publicação
								na plataforma. Quando realizadas alterações, os
								usuários serão devidamente notificados. Ao
								utilizar o serviço ou fornecer informações
								pessoais após eventuais modificações, o usuário
								e visitante demonstra sua concordância com as
								novas normas.
							</p>
						</PrivacyPolicySection>
					</div>
				</article>
			</div>
		</div>
	);
}
