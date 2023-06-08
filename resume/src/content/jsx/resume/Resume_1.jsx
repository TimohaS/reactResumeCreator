import React, {useState} from "react";
import Select from "react-select";
import Calendar from "react-calendar";
import '../../css/ui.css';
import '../../css/resume_1.css';

function MainInfo () {
    const [info, setInfo] = useState(
        {
            photo: "",
            lastname: "",
            firstname: "",
            middlename: "",
        }
    )

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
     }

    return (
        <div className="main-info data-item">
            <div className="photo">Добавить фото</div>

            <div className="user-name row">
                <div className="label-input">
                    <label htmlFor="lastname">Фамилия</label>   
                    <input type="text"
                        id="lastname"
                        name="lastname"
                        onChange={event => edit('lastname', event)}
                        placeholder="Введите фамилию" />  
                </div>              
                <div className="label-input">
                    <label htmlFor="firstname">Имя</label>
                    <input type="text"
                        id="firstname"
                        name="firstname"
                        onChange={event => edit('firstname', event)} 
                        placeholder="Введите имя"/> 
                </div> 
                <div className="label-input">
                    <label htmlFor="middlename">Отчество</label> 
                    <input type="text" 
                        id="middlename"
                        name="middlename"
                        onChange={event => edit('middlename', event)} 
                        placeholder="Введите отчество"/>  
                </div>                                             
            </div>
        </div>
    )
}

function WantedInfo() {
    const [info, setInfo] = useState(
        {
            jobTitle: "",
            salary: "",
            typeWork: "",
            workDays: "",
        }
    )

    const typeWork = [
        { value: 'Полная', label: 'Полная' },
        { value: 'Частичная', label: 'Частичная' },
        { value: 'Стажировка', label: 'Стажировка' },
        { value: 'Волонтёрство', label: 'Волонтёрство' }
    ]

    const workDays = [
        { value: 'Полный день', label: 'Полный день' },
        { value: 'Неполный день', label: 'Неполный день' },
        { value: 'Сменный график', label: 'Сменный график' },
        { value: 'Гибкий график', label: 'Гибкий график' }
    ]

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
    }

    function editSelect(prop, event) {
        setInfo({...info, ...{[prop]: event.value}});
    }

    return (
        <div className="wanted-info data-item row">
            <div className="label-input">
                <label htmlFor="jobTitle">Желаемая должность</label> 
                <input type="text" 
                    id="jobTitle"
                    name="jobTitle"
                    onChange={event => edit('jobTitle', event)}
                    placeholder="Какую должность вы хотите?"/>
            </div> 
            <div className="label-input">
                <label htmlFor="salary">Желаемая зарплата</label> 
                <input type="number" 
                    id="salary"
                    name="salary"
                    onChange={event => edit('salary', event)}
                    step="500"
                    placeholder="Какую зарплату вы хотите?"/>
            </div>
            <div className="label-input">
                <label htmlFor="typeWork">Тип занятости</label> 
                <Select options={typeWork} onChange={event => editSelect('typeWork', event)}/>
            </div>
            <div className="label-input">
                <label htmlFor="typeWork">График работы</label> 
                <Select options={workDays} onChange={event => editSelect('workDays', event)}/>
            </div>          
        </div>
    )
}

function ContactInfo() {
    const [info, setInfo] = useState(
        {
            phoneNumber: "",
            email: "",
            viber: false,
            telegram: false,
        }
    )

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
     }

    return (
        <div className="contact-info data-item row">
            <div className="label-input">
                <label htmlFor="phoneNumber">Телефон</label> 
                <input type="tel"                     
                    placeholder="Ваш телефонный номер"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={event => edit('phoneNumber', event)}/>
            </div> 
            <div className="label-input">
                <label htmlFor="email">Электронная почта</label> 
                <input type="text" 
                    id="email"
                    name="email"
                    placeholder="Введите ваш email"
                    onChange={event => edit('email', event)}/>
            </div> 
            <div className="checkbox">
                <label htmlFor="viber">Вайбер</label> 
                <input type="checkbox" 
                    id="viber"
                    name="viber"
                    onChange={event => edit('viber', event)}/>
            </div> 
            <div className="checkbox">
                <label htmlFor="telegram">Телеграм</label> 
                <input type="checkbox" 
                    id="telegram"
                    name="telegram"
                    onChange={event => edit('telegram', event)}/>
            </div> 
        </div>
    )
}

function PersonalInfo() {
    const [info, setInfo] = useState(
        {
            cityName: "",
            birhtDay: "",
            gender: false,
            education: "",
        }
    )
    
    const gender = [
        { value: 'Мужской', label: 'Мужской' },
        { value: 'Женский', label: 'Женский' },       
    ]

    const education = [
        { value: 'Среднее общее', label: 'Среднее общее' },
        { value: 'Среднее специальное', label: 'Среднее специальное' }, 
        { value: 'Среднее общее', label: 'Среднее общее' },
        { value: 'Бакалавр', label: 'Бакалавр' },   
        { value: 'Магистр', label: 'Магистр' },
        { value: 'Кандидат наук', label: 'Кандидат наук' },  
        { value: 'Доктор наук', label: 'Доктор наук' },         
    ]

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
    }

    function editSelect(prop, event) {
        setInfo({...info, ...{[prop]: event.value}});
    } 
    
    return (
        <div className="personal-info data-item">
            <div className="label-input">
                <label htmlFor="cityName">Город проживания</label> 
                <input type="text" 
                    id="cityName"
                    name="cityName"
                    placeholder="Введите ваш город проживания"
                    onChange={event => edit('cityName', event)}/>
            </div> 
            <div className="label-input">
                <label htmlFor="birhtDay">Дата рождения</label> 
                <input type="date" 
                    id="birhtDay"
                    name="birhtDay"
                    min="1940-01-01" 
                    max="2023-12-31"
                    onChange={event => edit('birhtDay', event)}/>
            </div> 
            <div className="label-input">
                    <label htmlFor="gender">Пол</label> 
                    <Select options={gender} onChange={event => editSelect('gender', event)}/>
            </div>
            <div className="label-input">
                    <label htmlFor="education">Образование</label> 
                    <Select options={education} onChange={event => editSelect('education', event)}/>
            </div>
        </div>
    )    
}

function JobInfo() {
    const [active, setActive] = useState(true);

    const [info, setInfo] = useState(
        {
            jobPosition: "",
            jobOrganization: "",
            functions: "",
            workPeriodOne: "",
            workPeriodTwo: "",
        }
    )

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
    }  
     
    function deleteElem(){
        setActive(!active);
        setInfo(null);
    } 
    
    if(active) {
        return(<div className="job-info data-item">
        <div className="label-input">
            <label htmlFor="jobPosition">Занимаемая должность</label> 
            <input type="text" 
                id="jobPosition"
                name="jobPosition"
                placeholder="Какую должность вы занимали?"
                onChange={event => edit('jobPosition', event)}/>
        </div> 
        <div className="label-input">
            <label htmlFor="jobOrganization">Название организации</label>
            <input type="text" 
                id="jobOrganization"
                name="jobOrganization"
                placeholder="Как называлась ваша организация?"
                onChange={event => edit('jobOrganization', event)}/>
        </div> 
        <div className="label-input">
            <label htmlFor="functions">Обязанности</label>
            <input type="text" 
                id="functions"
                name="functions"
                placeholder="Какие были ваши обязанности"
                onChange={event => edit('functions', event)}/>
        </div> 
        <div className="row">              
            <div className="label-input">
                <label htmlFor="workPeriodOne">Период работы От:</label> 
                <input type="month" 
                    id="workPeriodOne"
                    name="workPeriodOne"
                    min="1940-01" 
                    max="2023-12"
                    onChange={event => edit('workPeriodOne', event)}/>
            </div> 
            <div className="label-input">
                <label htmlFor="workPeriodTwo">Период работы До:</label> 
                <input type="month" 
                    id="workPeriodTwo"
                    name="workPeriodTwo"
                    min="1940-01" 
                    max="2023-12"
                    onChange={event => edit('workPeriodTwo', event)}/>
            </div>             
        </div>  
        <button onClick={deleteElem}>Удалить опыт работы</button>               
    </div>);
    }
    else{
        return(<></>)
    }
}

function EducationInfo() {
    const [info, setInfo] = useState(
        {
            university: "",
            faculty: "",
            specialzation: "",
            endStudy: "",
            formStudy: "",
        }
    )

    const formStudy = [
        { value: 'Очная', label: 'Очная' },
        { value: 'Очно-заочная', label: 'Очно-заочная' }, 
        { value: 'Заочная', label: 'Заочная' },       
    ]

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
     }

    function editSelect(prop, event) {
        setInfo({...info, ...{[prop]: event.value}});
    } 

    return (
        <div className="education-info data-item">
            <div className="label-input">   
                <label htmlFor="university">Название учебного заведения</label> 
                <input type="text" 
                    id="university"
                    name="university"
                    placeholder="Где вы учились?"
                    onChange={event => edit('university', event)}/>
            </div> 
            <div className="label-input">   
                <label htmlFor="faculty">Факультет</label>
                <input type="text" 
                    id="faculty"
                    name="faculty"
                    placeholder="На каком факультете прошли обучение"
                    onChange={event => edit('faculty', event)}/>
            </div> 
            <div className="label-input">   
                <label htmlFor="specialzation">Специальность</label>
                <input type="text" 
                    id="specialzation"
                    name="specialzation"
                    placeholder="Название вашей специальности"
                    onChange={event => edit('specialzation', event)}/>
            </div> 
            <div className="row">
                <div className="label-input">
                    <label htmlFor="endStudy">Год окончания</label> 
                    <input type="number" 
                        id="endStudy"
                        name="endStudy"
                        min="1940" 
                        max="2023"
                        step="1"
                        placeholder="В каком году?"
                        onChange={event => edit('endStudy', event)}/>
                </div>                
                <div className="label-input">
                    <label htmlFor="formStudy">Форма обучения</label> 
                    <Select options={formStudy} onChange={event => editSelect('formStudy', event)}/>
                </div>
            </div>                
            <button>Удалить образование</button>                                   
        </div>
    )
}

function CourseInfo() {
    const [info, setInfo] = useState(
        {
            course: "",
            organization: "",
            endStudy: "",   
        }
    )

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
     }

    return (
        <div className="course-info data-item">
            <div className="label-input">   
                <label htmlFor="course">Название курса или тренинга</label> 
                <input type="text" 
                    id="course"
                    name="course"
                    placeholder="Как назывался курс или тренинг?"
                    onChange={event => edit('course', event)}/>
            </div> 
            <div className="label-input">   
                <label htmlFor="organization">Организация курса или тренинга</label>    
                <input type="text" 
                    id="organization"
                    name="organization"
                    placeholder="Где вы прошли курс или тренинг?"
                    onChange={event => edit('organization', event)}/>
            </div> 
            <div className="row">
            <div className="label-input">
                    <label htmlFor="endStudy">Год окончания</label> 
                    <input type="number" 
                        id="endStudy"
                        name="endStudy"
                        min="1940" 
                        max="2023"
                        step="1"
                        placeholder="В каком году?"
                        onChange={event => edit('endStudy', event)}
                        />
                </div>             
            </div>                
            <button>Удалить курсы и тренинги</button>                                     
        </div> 
    )
}

function LanguageInfo() {
    const [info, setInfo] = useState(
        {
            language: "",
            level: "",            
        }
    )
     
    const level = [
        { value: 'Начинающий', label: 'Начинающий' },
        { value: 'Уверенное', label: 'Уверенное' }, 
        { value: 'Свободное', label: 'Свободное' }, 
        { value: 'В совершенстве', label: 'В совершенстве' },      
    ]

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
    }
    
    function editSelect(prop, event) {
        setInfo({...info, ...{[prop]: event.value}});
    } 

    return (
        <div className="language-info data-item">
            <div className="label-input">   
                <label htmlFor="language">Иностранный язык</label> 
                <input type="text" 
                        id="language"
                        name="language"
                        placeholder="Введите иностранный язык"
                        onChange={event => edit('language', event)}/>
            </div>
            <div className="label-input">
                <div className="level">
                    <label htmlFor="level">Уровень владения</label> 
                    <Select options={level} onChange={event => editSelect('level', event)}/>
                </div>
            </div>      
            <button>Удалить язык</button>                                        
        </div> 
    )
}

function OtherInfo() {
    const [info, setInfo] = useState(
        {
            army: false,
            motocycle: false,
            auto: false, 
            heavyAuto: false, 
            bus: false, 
            trailer: false,
            about: "",
            professional: "",             
        }
    )

    function edit(prop, event) {
        setInfo({...info, ...{[prop]: event.target.value}});
     }

    return (
        <div className="other-info data-item">
            <div className="checkbox">   
                <label htmlFor="army">Служба в армии</label>
                <input type="checkbox" 
                    id="army"
                    name="army"
                    onChange={event => edit('army', event)}/>
            </div>             
           
            <div className="auto">
                <p>Водительские права</p>
                <div className="checkbox">   
                    <label htmlFor="motocycle">А - Мотоциклы</label>      
                    <input type="checkbox" 
                        id="motocycle"
                        name="motocycle"
                        onChange={event => edit('motocycle', event)}/>
                </div> 
                <div className="checkbox">   
                    <label htmlFor="auto">В - Легковые автомобили</label> 
                    <input type="checkbox" 
                        id="auto"
                        name="auto"
                        onChange={event => edit('auto', event)}/>
                </div> 
                <div className="checkbox">   
                    <label htmlFor="heavyAuto">С - Грузовые автомобили</label> 
                    <input type="checkbox" 
                        id="heavyAuto"
                        name="heavyAuto"
                        onChange={event => edit('heavyAuto', event)}/>
                </div> 
                <div className="checkbox">   
                    <label htmlFor="bus">D - Автобусы</label> 
                    <input type="checkbox" 
                        id="bus"
                        name="bus"
                        onChange={event => edit('bus', event)}/>
                </div> 
                <div className="checkbox">   
                    <label htmlFor="trailer">Е - Автомобили с прицепом</label>    
                    <input type="checkbox" 
                        id="trailer"
                        name="trailer"
                        onChange={event => edit('trailer', event)}/>
                </div>
            </div>               
            <div className="label-input">   
                <label htmlFor="about">Личные качества</label>
                <textarea type="text" 
                    id="about"
                    name="about"
                    placeholder="Напишите пару предложений о себе"
                    onChange={event => edit('about', event)}/>
            </div> 
            <div className="label-input">   
                <label htmlFor="professional">ПрофеcYсиональные качества</label>
                <textarea type="text" 
                    id="professional"
                    name="professional"
                    placeholder="Напишите о своих проффесиональных качествах"
                    onChange={event => edit('professional', event) }/>
            </div>                                               
        </div>            
    )
}


export default function Resume_1() {    
    // const [jobList, setJobList] = useState([<JobInfo key ={0}/>]);        
    
    // const addJob = event => {
    //     setJobList(jobList.concat(<JobInfo key={jobList.length} />));
    // };
    
    
    return(
        <div className="resume">
            <div className="wrapper">
                <MainInfo/>
                <WantedInfo/>
                <p className="h-item">Контактная информация</p>
                <ContactInfo/>
                <p className="h-item">Личная информация</p>
                <PersonalInfo/>
                <p className="h-item">Опыт работы</p>
                <JobInfo/>
                <p className="h-item">Образование</p>
                <EducationInfo/>
                <p className="h-item">Курсы и тренинги</p>
                <CourseInfo/>
                <p className="h-item">Иностранные языки</p>
                <LanguageInfo/>    
                <p className="h-item">Дополнительная информация</p>
                <OtherInfo/>    
            </div>  
        </div>
    );
}

/* <MainInfo/>
                <WantedInfo/>
                <p className="h-item">Контактная информация</p>
                <ContactInfo/>
                <p className="h-item">Личная информация</p>
                <PersonalInfo/>
                <p className="h-item">Опыт работы</p>
                <JobInfo/>
                <p className="h-item">Образование</p>
                <EducationInfo/>
                <p className="h-item">Курсы и тренинги</p>
                <CourseInfo/>
                <p className="h-item">Иностранные языки</p>
                <LanguageInfo/>    
                <p className="h-item">Дополнительная информация</p>
                <OtherInfo/>   
                     
                */

            //     <div>
            //     {jobList}
            //     <button className="add-btn" onClick={addJob}>Добавить опыт работы</button>
            // </div> 