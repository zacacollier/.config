Vim�UnDo� ����fh#�x	X��]�QNm;%�>&���λ   {   S    query.KeyConditionExpression = `${query.KeyConditionExpression} and ts >= :ts`;   4   $                      \�g�    _�                     1        ����                                                                                                                                                                                                                                                                                                                                                             \�ep     �   0   3   v        �   0   2   u    5�_�                    2   	    ����                                                                                                                                                                                                                                                                                                                                                             \�es     �   2   5   y          �   2   4   x    �   1   4   w      	  if (ts)5�_�                    4        ����                                                                                                                                                                                                                                                                                                                                                             \�ew     �   3   4           5�_�                    3       ����                                                                                                                                                                                                                                                                                                                                                             \�ex     �   2   4   y          query.Exp5�_�                    3   *    ����                                                                                                                                                                                                                                                                                                                                                             \�e�     �   2   4   y      *    query.ExpressionAttributeValues[':ts']5�_�                    3   /    ����                                                                                                                                                                                                                                                                                                                                                             \�ge     �   2   4   z          �   2   4   y    5�_�                    3   #    ����                                                                                                                                                                                                                                                                                                                                                             \�go     �   2   4   z      #    query.KeyConditionExpression = 5�_�      	              3   C    ����                                                                                                                                                                                                                                                                                                                                                             \�gt     �   2   4   z      D    query.KeyConditionExpression = `${query.KeyConditionExpression}`5�_�      
           	   3   R    ����                                                                                                                                                                                                                                                                                                                                                             \�g�     �   2   4   z      R    query.KeyConditionExpression = `${query.KeyConditionExpression} and ts >= :ts`5�_�   	              
   3   R    ����                                                                                                                                                                                                                                                                                                                                                             \�g�    �   2   4   z      S    query.KeyConditionExpression = `${query.KeyConditionExpression} and ts >= :ts`,5�_�   
                    5    ����                                                                                                                                                                                                                                                                                                                                                             \�g�    �         z      =const buildQuery = ({ cognitoId, loggingContext, fact }) => {5�_�                       7    ����                                                                                                                                                                                                                                                                                                                               7          8       v   8    \�g�    �   z            �   y   {          };�   x   z            }�   w   y              throw error;�   v   x           �   u   w              }�   t   v          .      throw new errors.ProfileNotFoundError();�   s   u          G      logger.logWarn(loggingContext, 'Profile table not found', error);�   r   t          5    if (error.code === 'ResourceNotFoundException') {�   q   s              // table does not exists�   p   r            } catch (error) {�   o   q              return actualFacts;�   n   p              );�   m   o                },�   l   n          #        actual: actualFacts.length,�   k   m                  expected: facts.length,�   j   l                  cognitoId,�   i   k                {�   h   j          5      'Expected Facts vs Actual Facts - in quantity',�   g   i                loggingContext,�   f   h              logger.logDebug(�   e   g           �   d   f          C    const actualFacts = possibleFacts.filter(fact => fact != null);�   c   e           �   b   d              }�   a   c          =      possibleFacts.push(currentProfileFact[`${fact.name}`]);�   `   b           �   _   a                }�   ^   `          %        currentProfileFact = profile;�   ]   _          4        cachedProfiles[`${fact.profile}`] = profile;�   \   ^          3        const profile = JSON.parse(result.profile);�   [   ]           �   Z   \          !        if (Count <= 0) continue;�   Y   [          '        // no records for given profile�   X   Z           �   W   Y          &        } = await executeQuery(query);�   V   X                    Items: [result],�   U   W                    Count,�   T   V                  const {�   S   U           �   R   T                  if (!query) continue;�   Q   S          -        // means that profile does not exists�   P   R           �   O   Q          F        const query = buildQuery({ loggingContext, cognitoId, fact });�   N   P                 if (!currentProfileFact) {�   M   O          8      // if profile does not exists, fetch and cache it.�   L   N           �   K   M          <      let currentProfileFact = cachedProfiles[fact.profile];�   J   L           �   I   K                const fact = facts[i];�   H   J          ,    for (let i = 0; i < facts.length; i++) {�   G   I            try {�   F   H           �   E   G            const possibleFacts = [];�   D   F            const cachedProfiles = {};�   C   E          Iexport const getFacts = async ({ loggingContext, cognitoId, facts }) => {�   B   D           */�   A   C           * @returns The actual facts�   @   B          A * @throws {ProfileNotFoundError} The given profile was not found�   ?   A           * @param {Object} param.fact�   >   @          " * @param {String} param.cognitoId�   =   ?          ' * @param {Object} param.loggingContext�   <   >           * @param {Object} param�   ;   =           *�   :   <          < * Helper function which fetches each fact from its profile.�   9   ;          /**�   8   :           �   7   9          };�   6   8            return query;�   5   7           �   4   6            }�   3   5          0    query.ExpressionAttributeValues[':ts'] = ts;�   2   4          S    query.KeyConditionExpression = `${query.KeyConditionExpression} and ts >= :ts`;�   1   3            if (ts) {�   0   2           �   /   1            };�   .   0              Limit: 1,�   -   /              ScanIndexForward: false,�   ,   .              // false = desc, true = asc�   +   -              },�   *   ,                ':cognitoId': cognitoId,�   )   +               ExpressionAttributeValues: {�   (   *          5    KeyConditionExpression: 'cognitoId = :cognitoId',�   '   )              TableName: tableName,�   &   (            const query = {�   %   '           �   $   &            }�   #   %              return null;�   "   $          +    // so that It can be filtered out later�   !   #          3    // if profile does not exists yet, returns null�       "           �      !              });�                       error,�                      profile,�                G    logger.logDebug(loggingContext, 'buildQuery - Profile not found', {�                  } catch (error) {�                    }�                .      throw new errors.ProfileNotFoundError();�                    if (!tableName) {�                  try {�                 �                6  const { tableName } = configProfiles[profile] || {};�                  const { profile } = fact;�                Aconst buildQuery = ({ cognitoId, loggingContext, fact, ts }) => {�                ?const executeQuery = query => docClient.query(query).promise();�                 �                } = config;�                  },�                +    dynamodb: { profiles: configProfiles },�                  aws: {�                const {�                 �   
             /const docClient = DynamoDB.getDocumentClient();�   	              �      
          "import errors from '../../errors';�      	          	// errors�                 �                ,import DynamoDB from '../../utils/dynamodb';�                "import config from '../../config';�                 �                !import logger from 'dosh_logger';�                 �                 @/* eslint no-continue: 0, no-await-in-loop: 0, no-continue: 0 */5�_�                    $        ����                                                                                                                                                                                                                                                                                                                               7          8       v   8    \�g�     �   #   %   |      3    // if profile does not exists yet, returns null5�_�                    $   ,    ����                                                                                                                                                                                                                                                                                                                               7          8       v   8    \�g�     �   #   %   |      2    // if profile does not exist yet, returns null5�_�                    %       ����                                                                                                                                                                                                                                                                                                                               7          8       v   8    \�g�     �   $   &   |      +    // so that It can be filtered out later5�_�                    $        ����                                                                                                                                                                                                                                                                                                                            $          $          V       \�g�    �   #   %   |      1    // if profile does not exist yet, return null   +    // so that it can be filtered out later5�_�                    4   $    ����                                                                                                                                                                                                                                                                                                                            4   $       4   C       v   C    \�h     �   3   5   {      3    query.KeyConditionExpression = `and ts >= :ts`;5�_�                    4   "    ����                                                                                                                                                                                                                                                                                                                            4   $       4   $       v   $    \�h     �   3   5   {      4    query.KeyConditionExpression += `and ts >= :ts`;5�_�                    4   $    ����                                                                                                                                                                                                                                                                                                                            4   1       4   1       v   1    \�h     �   3   5   {      3    query.KeyConditionExpression += and ts >= :ts`;5�_�                    4   1    ����                                                                                                                                                                                                                                                                                                                            4   1       4   1       v   1    \�h     �   3   5   {      4    query.KeyConditionExpression += 'and ts >= :ts';5�_�                     4   %    ����                                                                                                                                                                                                                                                                                                                            4   1       4   1       v   1    \�h    �   3   5   {      5    query.KeyConditionExpression += ' and ts >= :ts';5��