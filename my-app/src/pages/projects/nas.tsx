import { useTranslation } from 'react-i18next';
import img from '../../img/omv_dashboard.png';

function Nas()
{
    const { i18n, t } = useTranslation();
    return (	
		<div className="project_page">
			<div className="project_description">
				<div className="s_20" >Homemade Server</div>
                <a> {t("nas")} </a>
			</div>
			<div className="project_detail">
                <div className='project_image'>
                    <img src={img} alt="OMV" />
                </div>
                <div className="badge_list">
                    <svg className="badge" fill="#5DACDF" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>openmediavault</title><path d="M.945 1.045A.947.947 0 0 0 0 1.988v20.024c0 .534.436.943.945.943h22.11a.944.944 0 0 0 .945-.943V1.988a.941.941 0 0 0-.945-.943Zm.118 1.064h21.875v19.784H1.063ZM3.53 4.385c-.198 0-.361.149-.361.334v3.699c0 .185.162.334.361.334h16.94c.198 0 .36-.15.36-.334v-3.7c0-.184-.161-.333-.36-.333zm2.057.886a1.3 1.3 0 0 1 1.297 1.297 1.3 1.3 0 0 1-1.297 1.3 1.3 1.3 0 0 1-1.299-1.3 1.3 1.3 0 0 1 1.299-1.297m-.002.62a.68.68 0 0 0-.676.677.68.68 0 0 0 .678.678.68.68 0 0 0 .678-.678.68.68 0 0 0-.678-.677ZM3.53 9.816c-.198 0-.361.15-.361.334v3.702c0 .184.162.332.361.332h16.94c.198 0 .36-.15.36-.334v-3.7c0-.184-.161-.334-.36-.334zm2.057.887A1.3 1.3 0 0 1 6.885 12a1.3 1.3 0 0 1-1.297 1.299A1.3 1.3 0 0 1 4.289 12a1.3 1.3 0 0 1 1.299-1.297m-.002.62A.68.68 0 0 0 4.91 12a.68.68 0 0 0 .678.68.68.68 0 0 0 0-1.358ZM3.53 15.247c-.198 0-.361.15-.361.334v3.701c0 .185.162.332.361.332h16.94c.198 0 .36-.15.36-.334v-3.699c0-.184-.161-.334-.36-.334zm2.057.887a1.3 1.3 0 0 1 1.297 1.297 1.3 1.3 0 0 1-1.297 1.298 1.3 1.3 0 0 1-1.299-1.298 1.3 1.3 0 0 1 1.299-1.297m-.002.619a.68.68 0 0 0 .002 1.358.68.68 0 0 0 0-1.358Z"/></svg>
                    <svg className="badge" fill="#2496ED" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Docker</title><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
                    <svg className="badge" fill="#13BEF9" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Portainer</title><path d="M12.504 0v1.023l-.01-.015-6.106 3.526H3.417v.751h5.359v3.638h1.942V5.284h1.786v10.416c.027 0 .54-.01.751.091V5.285h.531v10.608c.293.147.55.312.751.54V5.286h6.046v-.75h-1.267l-6.061-3.5V0zm0 1.87v2.664H7.889zm.751.031l4.56 2.633h-4.56zM9.142 5.285h1.21v1.686h-1.21zm-4.736 2.73v1.951h1.942v-1.95zm2.19 0v1.951h1.941v-1.95zm-2.19 2.171v1.951h1.942v-1.95zm2.19 0v1.951h1.941v-1.95zm2.18 0v1.951h1.942v-1.95zM4.36 12.43a3.73 3.73 0 00-.494 1.851c0 1.227.604 2.308 1.52 2.986.239-.064.477-.1.724-.11.1 0 .165.01.266.019.284-1.191 1.383-1.988 2.665-1.988.724 0 1.438.201 1.924.668.229-.476.302-1.007.302-1.575 0-.65-.165-1.292-.494-1.85zm4.828 3.16c-1.21 0-2.226.844-2.492 1.97a.922.922 0 00-.275-.009 2.559 2.559 0 00-2.564 2.556 2.565 2.565 0 003.096 2.5A2.579 2.579 0 009.233 24c.862 0 1.622-.43 2.09-1.081a2.557 2.557 0 004.186-1.97c0-.567-.193-1.099-.504-1.52a2.557 2.557 0 00-3.866-2.94 2.574 2.574 0 00-1.951-.898z"/></svg>
                    <svg className="badge" fill="#24A1C1" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Traefik Proxy</title><path d="M12 1.19c1.088 0 2.056.768 2.056 1.714 0 .947-.921 1.715-2.056 1.715-.13 0-.3-.022-.509-.064a.685.685 0 0 0-.475.076l-7.37 4.195a.344.344 0 0 0 .001.597l7.99 4.49c.208.116.461.116.669 0l8.034-4.468a.343.343 0 0 0 .003-.598l-2.507-1.424a.683.683 0 0 0-.67-.003l-2.647 1.468a.234.234 0 0 0-.119.18l-.001.025c0 .946-.921 1.714-2.056 1.714s-2.056-.768-2.056-1.714c0-.947.921-1.715 2.056-1.715.042 0 .09.002.145.007l.087.008.096.013a.685.685 0 0 0 .425-.08l3.913-2.173c.3-.166.662-.171.965-.017l.04.023 5.465 3.104c.686.39.693 1.368.03 1.773l-.037.021-3.656 2.033a.343.343 0 0 0 .007.604l3.62 1.906c.72.378.736 1.402.03 1.804l-10.995 6.272a1.03 1.03 0 0 1-1.019 0L.526 16.43a1.03 1.03 0 0 1 .034-1.806l3.66-1.911a.343.343 0 0 0 .01-.603L.524 10.029a1.03 1.03 0 0 1-.041-1.77l.036-.021L9.618 3.06a.688.688 0 0 0 .308-.369l.011-.036c.32-.952 1.046-1.466 2.063-1.466Zm5.076 12.63-4.492 2.586-.041.022c-.306.158-.671.152-.973-.018l-4.478-2.527a.682.682 0 0 0-.65-.01L3.86 15.224a.343.343 0 0 0-.012.602l7.887 4.515c.21.12.467.121.677 0l7.956-4.547a.343.343 0 0 0-.01-.602l-2.623-1.384a.683.683 0 0 0-.659.012z"/></svg>
                    <svg className="badge" fill="#61DAFB" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
                    <svg className="badge" fill="#175DDC" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitwarden</title><path d="M3.75 0A3.75 3.75 0 000 3.75v16.5A3.75 3.75 0 003.75 24h16.5A3.75 3.75 0 0024 20.25V3.75A3.75 3.75 0 0020.25 0zm1.36 2.92h13.8c.208 0 .388.076.54.228a.737.737 0 01.227.539v9.2c0 .687-.134 1.367-.401 2.042a7.618 7.618 0 01-.995 1.797 11.097 11.097 0 01-1.413 1.528c-.547.495-1.052.906-1.515 1.234-.464.327-.947.636-1.45.928-.503.291-.86.489-1.072.593-.212.104-.381.184-.51.24a.687.687 0 01-.31.071.688.688 0 01-.312-.072 13.784 13.784 0 01-.51-.24 20.61 20.61 0 01-1.071-.592 19.133 19.133 0 01-1.45-.928 16.457 16.457 0 01-1.515-1.234 11.11 11.11 0 01-1.414-1.528 7.617 7.617 0 01-.994-1.797 5.502 5.502 0 01-.401-2.042v-9.2c0-.208.076-.387.227-.54a.737.737 0 01.54-.227zm6.9 2.3v13.62c.95-.502 1.801-1.05 2.552-1.64 1.877-1.47 2.815-2.907 2.815-4.313V5.22Z"/></svg>
                </div>
			</div>
		</div>
    )
};

export default Nas;